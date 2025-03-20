function solution(arr, idx) {
    return arr.slice(idx).indexOf(1) >= 0 ? idx + arr.slice(idx).indexOf(1) : -1
}