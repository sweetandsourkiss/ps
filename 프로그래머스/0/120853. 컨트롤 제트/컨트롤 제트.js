function solution(s) {
    s = s.split(" ")
    const size = s.length
    const checkArr = Array(size).fill(false)
    for(let i = 0;i < size; i++){
        if(s[i] === 'Z' || (i + 1 !== size && s[i + 1] === 'Z')){
            checkArr[i] = true
        }
    }
    const filteredArr = s.filter((_, i) => !checkArr[i]).map(v=>parseInt(v))
    return filteredArr.reduce((prev, cur) => prev + cur, 0)
}