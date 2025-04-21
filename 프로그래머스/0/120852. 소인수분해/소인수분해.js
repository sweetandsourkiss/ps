function solution(n) {
    const primeCheck = Array(10001).fill(true);
    primeCheck[0] = false
    primeCheck[1] = false
    for(let i = 2; i <= 10000; i++){
        for(let j = i * 2; j <= 10000; j += i){
            primeCheck[j] = false
        }
    }
    const primes = []
    primeCheck.forEach((v, i)=>{
        if(v) primes.push(i)
    })
    // console.log(primes)
    let prime_index = 0
    const result = []
    while(n >= 2) {
        const _prime = primes[prime_index]
        
        if(n % _prime === 0){
            result.push(_prime)    
            
            while(n % _prime === 0){
                n /= _prime
            }
        }
        prime_index++
    }
    return result
}