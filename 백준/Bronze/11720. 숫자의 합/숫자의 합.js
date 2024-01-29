const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
// const numberOfDigits = parseInt(input[0]);
const answer = input[1]
  .split("")
  .map((v) => parseInt(v))
  .reduce((prev, curv) => prev + curv, 0);
console.log(answer);
