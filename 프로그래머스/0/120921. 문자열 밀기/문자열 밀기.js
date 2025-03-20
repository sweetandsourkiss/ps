function solution(A, B) {
    let count = -1
    for(let i = A.length;i >= 0;i--){
        const result = (A.slice(i) + A.slice(0, i))
        if(result === B){
            count = A.length - i
            break;
        }
    }
    return count
}