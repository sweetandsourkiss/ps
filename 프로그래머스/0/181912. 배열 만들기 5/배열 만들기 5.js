function solution(intStrs, k, s, l) {
    const answer = [];
    for(const target of intStrs){
        const target_number = parseInt(target.slice(s, s + l))
        if(target_number > k){
            answer.push(target_number)
        }
    }
    return answer;
}