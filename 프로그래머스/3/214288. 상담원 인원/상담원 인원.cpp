#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

// 전역 변수 설정
int min_total_wait = 1e9; // 충분히 큰 값으로 초기화

// 상담을 시뮬레이션하고 총 대기 시간을 계산하는 함수
int calculate_wait_time(int k, const vector<int>& mentors_per_type, const vector<vector<int>>& reqs) {
    // 각 상담 유형별로 '상담 종료 시간'을 관리할 우선순위 큐(최소 힙) 생성
    // priority_queue는 기본이 최대 힙이므로 greater<int>를 써서 최소 힙으로 만듭니다.
    vector<priority_queue<int, vector<int>, greater<int>>> mentor_queues(k + 1);

    // 각 유형에 배정된 멘토 수만큼 초기 상담 종료 시간을 0으로 설정
    for (int i = 1; i <= k; ++i) {
        for (int j = 0; j < mentors_per_type[i - 1]; ++j) {
            mentor_queues[i].push(0);
        }
    }

    int total_wait = 0;
    for (const auto& req : reqs) {
        int start_time = req[0];
        int duration = req[1];
        int type = req[2];

        // 해당 유형에서 가장 빨리 상담이 끝나는 시간 확인
        int earliest_finish_time = mentor_queues[type].top();
        mentor_queues[type].pop();

        if (earliest_finish_time > start_time) {
            // 대기가 발생하는 경우
            int wait_time = earliest_finish_time - start_time;
            total_wait += wait_time;
            // 상담이 끝난 후 바로 다음 상담 시작
            mentor_queues[type].push(earliest_finish_time + duration);
        } else {
            // 바로 상담이 가능한 경우 (대기 시간 0)
            mentor_queues[type].push(start_time + duration);
        }
    }
    return total_wait;
}

// 멘토 인원을 배분하는 모든 조합을 구하는 DFS (Backtracking)
void find_combinations(int k, int remain_mentors, int start_idx, vector<int>& mentors_per_type, const vector<vector<int>>& reqs) {
    if (remain_mentors == 0) {
        // 모든 멘토 배분이 완료되면 시뮬레이션 실행
        int current_wait = calculate_wait_time(k, mentors_per_type, reqs);
        min_total_wait = min(min_total_wait, current_wait);
        return;
    }

    for (int i = start_idx; i < k; ++i) {
        mentors_per_type[i]++;
        find_combinations(k, remain_mentors - 1, i, mentors_per_type, reqs);
        mentors_per_type[i]--; // 백트래킹 (원상 복구)
    }
}

int solution(int k, int n, vector<vector<int>> reqs) {
    // 1. 모든 유형에 멘토 최소 1명씩 배정 (초기화)
    vector<int> mentors_per_type(k, 1);
    
    // 2. 남은 인원(n-k)을 각 유형에 배분하는 조합 탐색
    find_combinations(k, n - k, 0, mentors_per_type, reqs);
    
    return min_total_wait;
}