function solution(sides) {
    let count = 0
    for(let i = 1;i < 2000; i++){
        const three = sides.concat([i])
        three.sort((a, b)=>b - a)
        if(three[0] < three[1] + three[2]) count++
    }
    return count
}