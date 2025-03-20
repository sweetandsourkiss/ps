function solution(arr, n) {
    let startIndex
    if(arr.length % 2 === 1){
        startIndex = 0
    }else {
        startIndex = 1
    }
    for(let i = startIndex;i<arr.length;i+=2){
            arr[i] += n
        }
    return arr
}