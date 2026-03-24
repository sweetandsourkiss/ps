#include <vector>
#include <iostream>

using namespace std;

// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
vector<int> solution(int m, int n, vector<vector<int>> picture) {
    int numberOfRegion = 0;
    int answer = 0;
    
    vector<vector<int>> delta = {{-1,0}, {1, 0}, {0, -1}, {0, 1}};
    vector<vector<bool>> visited(m, vector<bool>(n));
    
    int size = 0;
    
    // 람다 함수 정의 방식
    auto dps = [&](auto self, int r, int c, int color) -> void {
        for(int d = 0 ; d < 4 ; d++){
            int nr = r + delta[d][0];
            int nc = c + delta[d][1];
            if(nr >= 0 && nc >= 0 && nr < m && nc < n && !visited[nr][nc] && picture[nr][nc] == color){
                visited[nr][nc] = true;
                size++;
                self(self, nr, nc, color); // 자기 자신을 호출할 때 self 전달
            }
        }
    };
    
    // dps
    for(int i = 0 ; i < m ; i++){
        for(int j = 0 ; j < n ; j++){
            if(!visited[i][j] && picture[i][j] > 0){
                size = 1;
                visited[i][j] = 1;
                dps(dps, i, j, picture[i][j]);
                numberOfRegion++;
                if(answer < size){
                    answer = size;
                }
            }
        }
    }
    
    return {numberOfRegion, answer};
}