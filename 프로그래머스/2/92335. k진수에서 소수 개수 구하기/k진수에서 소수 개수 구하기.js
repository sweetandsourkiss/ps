function solution(n, k) {
    let answer = 0;
    let remains = []
    while(n > 0){
        remains.push(n % k)
        n = Math.floor(n / k)
    }
    const k_number = remains.reverse().join("")
    const candidates = k_number.split("0").filter(v => v)
    
    const bigintSqrt = (value) => {
      if (value < 0n) {
        throw new Error("제곱근은 음수에 대해 정의되지 않습니다.");
      }

      let low = 0n;
      let high = value;
      let mid;

      while (low <= high) {
        mid = (low + high) / 2n;
        const square = mid * mid;

        if (square === value) {
          return mid; // 정확히 제곱근인 경우
        } else if (square < value) {
          low = mid + 1n;
        } else {
          high = mid - 1n;
        }
      }

      return high; // 가장 가까운 정수 제곱근 반환
    }

    const checkPrime = (target) => {
        if(target === 1n) return false
        const sqrt = bigintSqrt(target)
        for(let i = 2n; i <= sqrt; i += 1n){
            if(target % i === 0n) return false
        }
        return true
    }
    
    candidates.forEach(candi=>{
        if(candi === "1" || candi === "4") return
        else if(candi === "2" || candi === "3") answer++
        else {
            if(checkPrime(BigInt(candi))) answer++
        }
    })
    
    return answer;
}