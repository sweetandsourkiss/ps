function solution(a, b) {
    const c = parseInt(a.toString() + b.toString())
    const d = 2 * a * b
    return c >= d ? c : d;
}