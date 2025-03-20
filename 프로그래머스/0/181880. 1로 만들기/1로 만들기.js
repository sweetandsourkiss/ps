function solution(num_list) {
    let answer = 0;
    for(let num of num_list){
        while(num > 1){
            num % 2 === 2 ? num /= 2 : num = (num - 1) / 2
            answer ++
        }
    }
    return answer;
}