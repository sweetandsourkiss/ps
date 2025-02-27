function solution(coin, cards) {
    let answer = 0;
    const hand = Array(cards.length).fill(false)
    for(let i = 0; i < cards.length / 3;i++){
        hand[cards[i] - 1] = true    
    }
    const keep = Array(cards.length).fill(false)
    let now_index = cards.length / 3
    let now_round = 1
    
    while(true){
        if(now_index === cards.length) {
            answer = cards.length / 3 + 1
            break;
        }
        keep[cards[now_index] - 1] = true
        keep[cards[now_index + 1] - 1] = true
        let flag = false
        
        // hand check
        for(let i = 0;i < cards.length / 2;i++){
            if(hand[i] && hand[cards.length - i - 1]){
                flag = true
                hand[i] = false
                hand[cards.length - i - 1] = false
                break;
            }   
        }
        
        if(!flag && coin >= 1){
            // hand + keep check
            for(let i = 0;i < cards.length;i++){
                if(hand[i] && keep[cards.length - i - 1]){
                    flag = true
                    coin--
                    hand[i] = false
                    keep[cards.length - i - 1] = false
                    break;
                }   
            }
        }
        
        if(!flag && coin >= 2){
            // keep check    
            for(let i = 0;i < cards.length / 2;i++){
                if(keep[i] && keep[cards.length - i - 1]){
                    flag = true
                    coin -= 2
                    keep[i] = false
                    keep[cards.length - i - 1] = false
                    break;
                }   
            }
        }
        
        if(!flag){
            answer = now_round
            break;
        }
        answer = now_round++
        now_index += 2
    }
    
    return answer;
}