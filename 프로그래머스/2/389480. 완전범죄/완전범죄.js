function solution(info, n, m) {
    // 배낭 문제와 흡사..?
    // 그럼 dp인데..?
    const size = info.length
    const dp = Array.from({length: size}, () => Array.from({length: size * 3 + 1}, () => -1))
    // console.log(dp)
    // dp[i][j] => i까지 b 누적값(j)일 때의 a 누적값
    
    if(info[0][1] < m){
        dp[0][info[0][1]] = 0
    }
    if(info[0][0] < n){ 
        dp[0][0] = info[0][0]
    }
    
    for(let i = 1;i < size;i++){
        for(let j = 0;j < size * 3 + 1; j++){
            // dp[i][j] >= 0일 때 체크
            if(dp[i - 1][j] >= 0){
                if(j + info[i][1] < m){
                    dp[i][j + info[i][1]] = dp[i - 1][j] // b에게 할당
                }
                
                if(dp[i - 1][j] + info[i][0] < n){
                    if(dp[i][j] >= 0){
                        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + info[i][0]) // a에게 할당
                    }else {
                        dp[i][j] = dp[i - 1][j] + info[i][0] // a에게 할당
                    }
                }
            }
        }
    }
    // console.log(dp)
    let answer = Infinity
    for(let j = 0;j < size * 3 + 1;j++){
        if(dp[size - 1][j] >= 0 && dp[size - 1][j] < n && j < m){
            answer = Math.min(answer, dp[size - 1][j])
        }
    }
    if(answer === Infinity) return -1
    return answer
}

// // 그냥 들이박으면 최악 2^40이니깐 말이 안되고
//     // dp는 아닌거 같음. 이전 결과에 영향을 받지 않음
//     //
//     // 정렬?
//     // b 내림 -> a 오름순으로 정렬 -> [[3, 1], [2, 1], [2, 3], ...]
//     // b가... 아닌듯
//     //
//     // a의 목표 흔적 개수를 정해놓고 하는 방식?
//     // a 오름 -> b 내림순으로 정렬
//     //
//     // 제미나이가 dfs래..
//     // 완전 탐색은 2^40이지만
//     // 그전에 정렬이나 백트래킹 해놓으면 될듯?
//     let answer = Infinity
    
//     const dfs = (sum_a, sum_b, idx) => {
//         // 이미 answer보다 sum_a가 같거나 크다면 종료
//         if(answer <= sum_a) return;
//         // a 또는 b가 임계치를 넘었다면 종료
//         if(sum_a >= n || sum_b >= m) return;
        
//         // 끝까지 왔다면
//         if(idx == info.length){
//             answer = sum_a
//         }else {
//             // a를 주는 경우
//             dfs(sum_a + info[idx][0], sum_b, idx + 1)
//             // b를 주는 경우
//             dfs(sum_a, sum_b + info[idx][1], idx + 1)
//         }
//     }
    
//     dfs(0, 0, 0)
    
//     if(answer === Infinity) return -1
//     else return answer