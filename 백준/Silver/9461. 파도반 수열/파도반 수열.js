const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const test_number = +input[0];
let index = 1;
let answer = [];

const padovan = Array(101);
padovan[1] = 1;
padovan[2] = 1;
padovan[3] = 1;
padovan[4] = 2;
padovan[5] = 2;

for (let p = 6; p <= 100; p++) {
  padovan[p] = padovan[p - 1] + padovan[p - 5];
}

for (let t = 0; t < test_number; t++) {
  const N = +input[index++];
  answer.push(padovan[N]);
}

console.log(answer.join("\n"));
