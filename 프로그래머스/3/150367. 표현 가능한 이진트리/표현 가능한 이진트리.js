function solution(numbers) {
    var answer = [];
    // 중위 Left Root Right
    // 일단 이진수로 만들고
    // 그거로 이진트리를 만들 때 끊기는 부분이 있다면 못 만드는 것임
    // 루트에서 탐색을 시작하여(루트는 반드시 존재해야함)
    // 이어지는 노드를 따라 탐색함
    // 방문이 안된 노드가 있으면 만들 수 없는 것임
    numbers.forEach(target=>{
        let flag = true
        let big_target = BigInt(target)
        let binary_target = []
        while(big_target > 0n) {
            binary_target.push(big_target % 2n)
            big_target /= 2n
        }
        binary_target.reverse()
        // console.log(binary_target)
        // binary_target.legth가 2^n - 1 될 때 까지 앞에 0n을 추가해야함
        let log2_binary_target_length = Math.log2(binary_target.length + 1)
        while(Math.ceil(log2_binary_target_length) !== log2_binary_target_length) {
            binary_target.unshift(0n)
            log2_binary_target_length = Math.log2(binary_target.length + 1)
        }
            
        const bfs = (pos, depth) => {
            if(binary_target[pos] === 0n) return
            binary_target[pos] = 0n
            // 위치가 짝수라면 리프 노드
            if(pos % 2 === 0) return
            // left는 depth만큼 감소
            bfs(pos - depth, depth / 2)
            // right는 depth만큼 증가
            bfs(pos + depth, depth / 2)
        }
        const start = parseInt(binary_target.length / 2)
        bfs(start, (start + 1) / 2)
        // 0n이 아닌 노드가 있다면 만들 수 없는 트리
        for(let i = 0;i<binary_target.length;i++){
            if(binary_target[i] === 1n){
                flag = false
                break;
            }
        }
        answer.push(flag ? 1 : 0)
    })
    return answer;
}