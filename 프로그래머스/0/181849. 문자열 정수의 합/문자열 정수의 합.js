function solution(num_str) {
    return num_str.split("").map(Number).reduce((pre, cur)=>pre+cur, 0)
}