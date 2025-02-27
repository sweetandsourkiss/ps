function solution(n, tops) {
    const dp = Array(2 * n + 1).fill(0)
    dp[0] = 1
    dp[1] = tops[0] === 1 ? 3 : 2
    
    for(let i = 2;i <= 2 * n;i++){
        if(i % 2 === 1){
            if(tops[parseInt(i / 2)] === 1){
                dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 10007
            } else {
                dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
            }
        }else {
            dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
        }
    }
    return dp[2 * n];
}