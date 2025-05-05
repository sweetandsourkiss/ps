function solution(numbers, k) {
    const len = (k - 1) * 2
    return numbers[len % numbers.length]
}