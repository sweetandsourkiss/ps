const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const numbers = input.filter((v) => v.length).map((v) => parseInt(v));

let max = 0;
let maxIndex = -1;
numbers.forEach((v, index) => {
  if (max < v) {
    max = v;
    maxIndex = index + 1;
  }
});

console.log(max);
console.log(maxIndex);
