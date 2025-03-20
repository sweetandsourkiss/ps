function solution(rank, attendance) {
    const result = rank.map((v, i)=> [v, i]).filter((v, i) => attendance[i]).sort((a, b)=> a[0] - b[0]).slice(0, 3)
    return result[0][1] * 10000 + result[1][1] * 100 + result[2][1]
}