function solution(l, r) {
    const arr = []
    const regex = /^[05]+$/
    for(let i = l;i <= r;i++){
        if(regex.test(i.toString())) arr.push(i)
    }
    if(arr.length === 0){
        return [-1]
    }else {
        return arr
    }
}