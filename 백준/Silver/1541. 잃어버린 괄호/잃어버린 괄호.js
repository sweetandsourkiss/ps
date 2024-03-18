const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const calculation = input[0].split("-").map((v) =>
  v
    .split("+")
    .map(Number)
    .reduce((prev, cur) => prev + cur, 0)
);
let answer = calculation[0];
for (
  let sub_sum_index = 1;
  sub_sum_index < calculation.length;
  sub_sum_index++
) {
  answer -= calculation[sub_sum_index];
}
console.log(answer);