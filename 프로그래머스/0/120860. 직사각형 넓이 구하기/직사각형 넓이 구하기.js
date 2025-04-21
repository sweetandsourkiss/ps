function solution(dots) {
    let min_x = 256, min_y = 256
    let max_x = -256, max_y = -256
    dots.forEach(([x, y]) => {
        console.log(x, y)
        min_x = Math.min(min_x, x)
        max_x = Math.max(max_x, x)
        min_y = Math.min(min_y, y)
        max_y = Math.max(max_y, y)
    })
    return (max_x - min_x) * (max_y - min_y)
}