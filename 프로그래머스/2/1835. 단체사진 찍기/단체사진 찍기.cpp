#include <string>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int answer_count; // 전역 변수 이름 중복 방지

void permutation(int index, const vector<char>& friends, vector<char>& arr, vector<bool>& visited, const vector<string>& data) {
    if (index == 8) {
        for (const string& condition : data) {
            // 1. 위치 찾기 (vector<char>에서 찾기)
            int pos1 = 0, pos2 = 0;
            for(int i = 0; i < 8; i++) {
                if(arr[i] == condition[0]) pos1 = i;
                if(arr[i] == condition[2]) pos2 = i;
            }

            // 2. 실제 거리와 조건 숫자 파싱
            int actual_dist = abs(pos1 - pos2) - 1;
            char op = condition[3];
            int req_dist = condition[4] - '0'; // 문자 '2'를 숫자 2로!

            // 3. 조건 검사 (틀리면 바로 리턴해서 최적화)
            if (op == '=') {
                if (actual_dist != req_dist) return;
            } else if (op == '>') {
                if (actual_dist <= req_dist) return;
            } else if (op == '<') {
                if (actual_dist >= req_dist) return;
            }
        }
        // 모든 조건을 통과하면 카운트
        answer_count++;
        return;
    }

    for (int i = 0; i < 8; i++) {
        if (!visited[i]) {
            visited[i] = true;
            arr[index] = friends[i];
            permutation(index + 1, friends, arr, visited, data);
            visited[i] = false;
        }
    }
}

int solution(int n, vector<string> data) {
    answer_count = 0; // 초기화 필수!
    vector<char> friends = {'A', 'C', 'F', 'J', 'M', 'N', 'R', 'T'};
    vector<char> arr(8);
    vector<bool> visited(8, false);

    permutation(0, friends, arr, visited, data);

    return answer_count;
}