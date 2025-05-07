function solution(n, k) {
    const free_drink = parseInt(n / 10)
    return n * 12000 + (k - free_drink) * 2000
}