function solution(strArr) {
    const answer = {}
    for(const str of strArr){
        const len = str.length
        if(answer[len]){
            answer[len]++
        }else {
            answer[len] = 1
        }
    }
    return Object.values(answer).reduce((pre, cur) => Math.max(pre, cur), 0)
}