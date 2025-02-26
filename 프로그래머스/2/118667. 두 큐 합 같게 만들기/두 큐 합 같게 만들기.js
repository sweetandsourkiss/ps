function solution(queue1, queue2) {
    let left = 0;
    let right = 0
    
    for(let i = 0;i < queue1.length;i++){
        left += queue1[i]
        right += queue2[i]
    }
    
    if((left + right) % 2 === 1) return -1
    
    let count = 0
    let leftIndex = 0
    let rightIndex = 0
    
    while(true){
        if(count > 600000) return -1
        if(left === right) return count
        
        if(left > right){
            const front = queue1[leftIndex++]
            left -= front
            right += front 
            queue2.push(front)
        } else {
            const front = queue2[rightIndex++]
            left += front
            right -= front
            queue1.push(front)
        }
        count++
    }
}