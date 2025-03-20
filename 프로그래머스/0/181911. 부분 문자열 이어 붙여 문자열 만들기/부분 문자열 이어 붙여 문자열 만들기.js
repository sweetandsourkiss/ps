function solution(my_strings, parts) {
    let answer = []
    for(const [index, [s, e]] of parts.entries()){
        answer.push(my_strings[index].slice(s, e + 1))
    }
    return answer.join("")
}