function solution(n, info) {
    const answer = [];
    // 모든 경우를 해봐야할 것 같다.. DFS?
    // 10점 부터 내려오면서 x점을 얻기 위해 필요한 화살 개수를 소비한다
    // 0점에 도달하거나 남은 화살의 개수가 0이 될 떄까지 반복한다.
    // 최대 점수 차이를 비교하면서 차이가 더 클 경우 최대 점수 차이와 쏜 화살 배열을 새로 갱신한다.
    let max_score_gap = -1
    let max_score_arrow_arr = [-1]
    
    const dfs = (remain_arrow, now_target, arrow_arr) => {
        if(remain_arrow === 0 || now_target === 0){
            if(now_target === 0 && remain_arrow > 0){
                arrow_arr[10] = remain_arrow
            }
            // 라이언과 어피치 점수 비교
            // 라이언이 점수가 높을 경우 최대 점수 차이와 비교
            // 현재 점수 차가 더 클 경우 화살 배열을 새로 갱신
            // 점수가 같을 경우 낮은 점수를 더 맞힌 경우로 갱신한다
            let _ryan_score = 0
            let _apeach_score = 0
            
            for(let i = 0;i <= 9;i++){
                if(info[i] === 0 && arrow_arr[i] === 0) continue
                if(info[i] >= arrow_arr[i]) _apeach_score += (10 - i)
                else _ryan_score += (10 - i)
            }
            
            if(_apeach_score < _ryan_score) {
                const _score_gap = _ryan_score - _apeach_score
                if(_score_gap > max_score_gap){
                    max_score_gap = _score_gap
                    max_score_arrow_arr = JSON.parse(JSON.stringify(arrow_arr))
                } else if(_score_gap === max_score_gap){
                    let flag = false
                    for(let i = 10 ; i >= 0 ; i--){
                        if(max_score_arrow_arr[i] > arrow_arr[i]) {
                            flag = false
                            break;
                        }
                        else if(max_score_arrow_arr[i] < arrow_arr[i]){
                            flag = true
                            break;
                        }
                    }
                    if(flag){
                        max_score_gap = _score_gap
                        max_score_arrow_arr = JSON.parse(JSON.stringify(arrow_arr))
                    }
                }
            }
            arrow_arr[10] = 0
        } else {
            // 현재 타겟 점수를 얻는 경우와 넘어가는 경우를 고려한다
            // 얻기 위한 화살의 개수가 현재 화살 수보다 많으면 넘어간다       
            // 1. 얻는 경우
            const needed_arrow = info[10 - now_target] + 1
            if(needed_arrow <= remain_arrow){
                arrow_arr[10 - now_target] = needed_arrow
                dfs(remain_arrow - needed_arrow, now_target - 1, arrow_arr)
            }
            // 2. 얻지 않는 경우
            arrow_arr[10 - now_target] = 0
            dfs(remain_arrow, now_target - 1, arrow_arr)
        }
    }
    
    dfs(n, 10, Array(11).fill(0))
    
    return max_score_arrow_arr;
}