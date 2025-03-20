function solution(numlist, n) {
    numlist.sort((a, b) => {
        const a_diff = Math.abs(n - a)
        const b_diff = Math.abs(n - b)
        if(a_diff === b_diff){
            return b - a
        }else {
            return a_diff - b_diff
        }
    })
    return numlist
}