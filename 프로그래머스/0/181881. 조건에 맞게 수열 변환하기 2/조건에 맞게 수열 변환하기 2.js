function solution(arr) {
    let flag  = false
    let index = 0
    while(true){
        flag = false
        arr = arr.map(v=>{
            if(v >= 50 && v % 2 === 0) {
                flag = true
                return v / 2
            }
            else if(v < 50 && v % 2 === 1) {
                flag = true
                return v * 2 + 1
            }
            return v
        })
        if(!flag) break
        index++
    }
    return index
}