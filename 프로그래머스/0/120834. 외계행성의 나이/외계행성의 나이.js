function solution(age) {
    let answer = []
    age.toString().split("").forEach(char=>{
        answer.push(String.fromCharCode((+char) + 97))
    })
    
    return answer.join("")
}