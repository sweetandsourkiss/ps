#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int min_total_wait = 1e9;

int calculate_wait_time(int k , const vector<int>& mentors_per_type, const vector<vector<int>>& reqs){
    vector<priority_queue<int, vector<int>, greater<int>>> mentor_queues(k + 1);

    for(int i = 1;i <= k; i++){
        for(int j = 0; j < mentors_per_type[i - 1]; ++j){
            mentor_queues[i].push(0);
        }
    }

    int total_wait = 0;
    for(const auto& req : reqs){
        int start_time = req[0];
        int duration = req[1];
        int type = req[2];

        int earlist_finish_time = mentor_queues[type].top();
        mentor_queues[type].pop();

        if(earlist_finish_time > start_time){
            int wait_time = earlist_finish_time - start_time;
            total_wait += wait_time;

            mentor_queues[type].push(earlist_finish_time + duration);
        }else {
            mentor_queues[type].push(start_time + duration);
        }
    }
    return total_wait;
}

void find_combinations(int k, int remain_mentors, int start_idx, vector<int>& mentors_per_type, const vector<vector<int>>& reqs) {
    if(remain_mentors == 0){
        int current_wait = calculate_wait_time(k, mentors_per_type, reqs);
        min_total_wait = min(min_total_wait, current_wait);
        return;
    }

    for(int i = start_idx; i < k; i++){
        mentors_per_type[i]++;
        find_combinations(k, remain_mentors - 1, i, mentors_per_type, reqs);
        mentors_per_type[i]--;
    }
}

int solution(int k , int n , vector<vector<int>> reqs){
    vector<int> mentors_per_type(k, 1);

    find_combinations(k, n - k, 0, mentors_per_type, reqs);

    return min_total_wait;
}