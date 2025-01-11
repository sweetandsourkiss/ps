import java.util.*;

class Solution {
    public int solution(int[][] routes) {
        int answer = 0;
        
        // 마지막 카메라 위치
        int camera = -30001;
        
        // 출발-도착 순서대로 정렬
        Arrays.sort(routes, (o1, o2) -> {
            if(o1[1] == o2[1]) {
                return o1[0] - o2[0];
            }
            return o1[1] - o2[1];
        });
        
        // 탐색
        for(int i = 0; i < routes.length; i++) {
            if(routes[i][0] > camera) {
                camera = routes[i][1];
                answer++;
            }
        }
        
        return answer;
    }
}