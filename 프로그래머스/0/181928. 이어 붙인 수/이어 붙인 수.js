function solution(num_list) {
    let odds = []
    let evens = []
    num_list.forEach(v => {
        if(v % 2 === 1){
            odds.push(v)
        }else {
            evens.push(v)
        }
    })
    return Number(odds.join("")) + parseInt(evens.join(""));
}