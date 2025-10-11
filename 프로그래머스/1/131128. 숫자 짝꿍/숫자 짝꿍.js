function solution(X, Y) {
    const friends = []
    const X_numbers = Array(10).fill(0)
    const Y_numbers = Array(10).fill(0)
    
    X.split("").forEach(ch => {
        X_numbers[Number(ch)]++
    })
    
    Y.split("").forEach(ch => {
        Y_numbers[Number(ch)]++
    })
    
    for(let idx = 9; idx >=0; idx--){
        const _friend = Math.min(X_numbers[idx], Y_numbers[idx])
        for(let i = 0;i < _friend; i++){
            friends.push(idx)
        }
    }
    
    console.log(friends)
    if(friends.length===0){
        return "-1"
    }else if(friends[0] === 0){
        return "0"
    }else {
        return friends.join("")
    }
}