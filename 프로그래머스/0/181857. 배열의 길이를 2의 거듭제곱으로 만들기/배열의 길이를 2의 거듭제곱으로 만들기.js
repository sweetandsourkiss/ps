function solution(arr) {
    const target_length = Math.pow(2, Math.ceil(Math.log2(arr.length)))
    return arr.concat(Array(target_length - arr.length).fill(0));
}