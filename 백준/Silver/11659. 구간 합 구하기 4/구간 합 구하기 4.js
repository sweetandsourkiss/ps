const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [number_of_number, case_number] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
for (let i = 1; i < number_of_number; i++) {
  numbers[i] += numbers[i - 1];
}
numbers.unshift(0);
let index = 2;
let answer = "";
for (let c = 0; c < case_number; c++) {
  const [start, end] = input[index++].split(" ").map(Number);
  answer += numbers[end] - numbers[start - 1] + "\n";
}

console.log(answer);
