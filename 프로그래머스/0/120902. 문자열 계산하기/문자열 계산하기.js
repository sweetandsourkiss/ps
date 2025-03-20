function solution(my_string) {
    const calculation = {
        '+': (a, b)=>a+b,
        '-': (a, b)=>a-b,
    }
    const arr = my_string.split(" ")
    let sum = +arr[0]
    for(let i = 1;i < arr.length;i+=2){
        sum = calculation[arr[i]](sum, +arr[i+1])
    }
    return sum
}