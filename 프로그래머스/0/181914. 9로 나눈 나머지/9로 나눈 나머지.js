function solution(number) {
    let sum = 0
    for(const num of number.split("")){
        sum += Number(num)
    }
    return sum % 9
}