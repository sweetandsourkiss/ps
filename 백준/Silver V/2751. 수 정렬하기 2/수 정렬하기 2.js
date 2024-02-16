const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfIntegers = parseInt(input[0]);
const numbers = input
  .slice(1)
  .filter((v) => v !== "")
  .map((v) => parseInt(v));
numbers.sort((a, b) => a - b);
console.log(numbers.join("\n"));
