function solution(q, r, code) {
    const answer = []
    for(let i = 0; i + r <code.length; i += q){
        answer.push(code[i+r])
    }
    return answer.join("")
}