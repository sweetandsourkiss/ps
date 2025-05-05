function solution(n) {
    const arr = Array.from({length:n + 1}, ()=> false)
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++){
        if(!arr[i]) {
            for(let j = i * 2; j <= n; j += i){
                arr[j] = true
            }
        }
    }
    return arr.filter(v => v).length
}