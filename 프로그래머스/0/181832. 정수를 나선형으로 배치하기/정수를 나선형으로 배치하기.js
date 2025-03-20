function solution(n) {
    const answer = Array.from({length:n}, ()=> Array(n).fill(0))
    let count = 1
    let nowR= 0, nowC = 0
    let dir = 'r'
    while(count <= Math.pow(n, 2)){
        answer[nowR][nowC] = count
        switch(dir){
            case 'r':
                if(nowC + 1 < n && answer[nowR][nowC + 1] === 0){
                    nowC++
                }else {
                    nowR++
                    dir = 'd'
                }
                break;
            case 'd':
                if(nowR + 1 < n && answer[nowR + 1][nowC] === 0){
                    nowR++
                }else {
                    nowC--
                    dir = 'l'
                }
                break;
            case 'l':
                if(nowC - 1 >= 0 && answer[nowR][nowC - 1] === 0){
                    nowC--
                }else {
                    nowR--
                    dir = 'u'
                }
                break;
            case 'u':
                if(nowR - 1 < n && answer[nowR - 1][nowC] === 0){
                    nowR--
                }else {
                    nowC++
                    dir = 'r'
                }
                break;
        }
        count++
    }
    return answer;
}