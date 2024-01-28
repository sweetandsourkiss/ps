const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfDigits = parseInt(input[0]);
const digits = input[1].split(" ").map((v) => parseInt(v));
let min = Number.POSITIVE_INFINITY,
  max = Number.NEGATIVE_INFINITY;

for (let index = 0; index < numberOfDigits; index++) {
  min = Math.min(min, digits[index]);
  max = Math.max(max, digits[index]);
}

console.log(min, max);
