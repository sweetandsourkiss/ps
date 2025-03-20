function solution(arr) {
    let flag = true
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(i===j) continue
            if(arr[i][j] !== arr[j][i]){
                flag = false
            }
        }
    }
    return flag ? 1 : 0
}