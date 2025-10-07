function solution(a, b, n) {
    let answer = 0
    
    while(n >= a){
        const times = Math.floor(n / a)
        let get = times * b
        n -= times * a
        answer += get
        n += get
    }
    
    return answer
}