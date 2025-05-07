function solution(my_string, letter) {
    return my_string.split("").filter(char => char !== letter).join("")
}