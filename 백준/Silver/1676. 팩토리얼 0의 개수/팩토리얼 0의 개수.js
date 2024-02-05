const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const number = parseInt(input[0]);

const answer =
  Math.floor(number / 5) + Math.floor(number / 25) + Math.floor(number / 125);

console.log(answer);
