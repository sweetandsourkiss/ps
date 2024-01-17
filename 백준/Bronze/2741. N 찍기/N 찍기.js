const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const number = parseInt(input[0]);
let answer = "";

for (v in Array(number).fill(true)) {
  answer += `${parseInt(v) + 1}` + "\n";
}
console.log(answer);
