const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 31403
 * @description 2025.01.06
 */

let result = "";
// A, B, C를 수로 생각했을 때
result += Number(input[0]) + Number(input[1]) - Number(input[2]) + "\n";
// A, B, C를 문자열로 생각했을 때
result += input[0] + input[1] - input[2];
// 정답 출력
console.log(result);
