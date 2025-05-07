function solution(numer1, denom1, numer2, denom2) {
    const top = numer1 * denom2 + numer2 * denom1
    const bottom = denom1 * denom2
    let max_divider = -1
    let max = Math.max(top, bottom)
    let min = Math.min(top, bottom)
    if (max === min){
        return [1, 1]
    }
    while(true){
        const diff = max - min
        if (diff === 0){
            max_divider = max
            return
        }
        
        if(max % diff === 0 && min % diff === 0){
            max_divider = diff
            break;
        }else {
            max = Math.max(min, diff)
            min = Math.min(min, diff)
        }
    }
    return [top / max_divider, bottom / max_divider]
}