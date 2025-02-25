function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    
    // 누적 합을 이용한 방법
    deliveries.unshift(0)
    pickups.unshift(0)
    
    for(let i = 1;i <= n; i++){
        deliveries[i] += deliveries[i - 1]
        pickups[i] += pickups[i - 1]
    }
    // console.log(deliveries, pickups)
    let remainDeli = deliveries[n]
    let remainPick = pickups[n]
    
    // console.log(remainDeli, remainPick)
    let prevDeliIndex = n
    let prevPickIndex = n
    while(remainDeli > 0 || remainPick > 0){
        let curDeliIndex = -1
        let curPickIndex = -1
        for(let i = prevDeliIndex ; i >= 0 ; i--){
            // i번째 도시까지 남은 개수와 총 남아있는 개수를 비교.
            if(deliveries[i] < remainDeli){
                // i + 1번째 도시를 방문해야 한다.
                prevDeliIndex = i + 1
                curDeliIndex = i + 1
                remainDeli -= cap
                break;
            }
        }
        
        for(let i = prevPickIndex ; i >= 0 ; i--){
            // i번째 도시까지 남은 개수와 총 남아있는 개수를 비교.
            if(pickups[i] < remainPick){
                // i + 1번째 도시를 방문해야 한다.
                prevPickIndex = i + 1
                curPickIndex = i + 1
                remainPick -= cap
                break;
            }
        }
        
        answer += 2 * Math.max(curDeliIndex, curPickIndex)
    }
    
    return answer;
}