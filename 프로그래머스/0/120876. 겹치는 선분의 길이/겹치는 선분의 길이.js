function solution(lines) {
    const startPos = Array(200).fill(0)
    for(let [s, e] of lines){
        for(; s < e; s++) {
            startPos[s + 100]++
        }
    }
    return startPos.reduce((pre, cur) => cur > 1 ? pre + 1 : pre, 0)
}