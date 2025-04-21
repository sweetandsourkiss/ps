function solution(numbers) {
    numbers.sort((a, b) => a - b)
    const size = numbers.length
    return Math.max(numbers[0] * numbers[1], numbers[size - 2] * numbers[size - 1])
}