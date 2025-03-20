function solution(n) {
    return n.toString().split("").map(Number).reduce((pre, cur)=>pre+cur, 0)
}