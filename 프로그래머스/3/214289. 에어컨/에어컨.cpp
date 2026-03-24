#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(int temperature, int t1, int t2, int a, int b, vector<int> onboard) {
    // 1. 온도 보정 (음수 인덱스 방지)
    int offset = 10;
    temperature += offset;
    t1 += offset;
    t2 += offset;

    const int INF = 1e9;
    int n = onboard.size();
    // DP 테이블: dp[시간][온도]
    vector<vector<int>> dp(n, vector<int>(51, INF));

    // 3. 초기 상태 (0분, 실외 온도에서 시작)
    dp[0][temperature] = 0;

    for (int i = 1; i < n; i++) {
        for (int j = 0; j <= 50; j++) {
            // 승객이 있을 때 온도 범위를 벗어나면 계산할 필요 없음
            if (onboard[i] == 1 && (j < t1 || j > t2)) continue;

            // --- 점화식: 이전 시간(i-1)에서 현재 온도(j)로 오는 경우들 ---
            
            // Case 1: 에어컨을 끈 경우 (비용 0)
            if (j == temperature) {
                // 실외온도와 같으면 그대로 유지되거나, +-1에서 실외온도로 돌아옴
                dp[i][j] = min({dp[i][j], dp[i-1][j], 
                                j > 0 ? dp[i-1][j-1] : INF, 
                                j < 50 ? dp[i-1][j+1] : INF});
            } else if (j < temperature) {
                // 현재 온도가 실외보다 낮으면, 끄면 온도가 높아짐 (j-1 -> j)
                if (j > 0) dp[i][j] = min(dp[i][j], dp[i-1][j-1]);
            } else {
                // 현재 온도가 실외보다 높으면, 끄면 온도가 낮아짐 (j+1 -> j)
                if (j < 50) dp[i][j] = min(dp[i][j], dp[i-1][j+1]);
            }

            // Case 2: 에어컨을 켠 경우
            // 2-1) 온도 유지 (비용 b)
            dp[i][j] = min(dp[i][j], dp[i-1][j] + b);
            // 2-2) 온도 변화 (비용 a) - 목표 온도가 실외온도와 반대 방향일 때만 유효
            if (j > 0) dp[i][j] = min(dp[i][j], dp[i-1][j-1] + a);
            if (j < 50) dp[i][j] = min(dp[i][j], dp[i-1][j+1] + a);
        }
    }

    // 마지막 시간(n-1)의 모든 온도 중 최솟값이 정답
    int answer = INF;
    for (int j = 0; j <= 50; j++) {
        answer = min(answer, dp[n - 1][j]);
    }
    
    return answer;
}