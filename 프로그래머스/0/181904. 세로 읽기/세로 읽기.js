function solution(my_string, m, c) {
    const answer = []
    for(let i = 0; i + c - 1 < my_string.length; i += m){
        answer.push(my_string[i + c - 1])
    }
    return answer.join("")
}