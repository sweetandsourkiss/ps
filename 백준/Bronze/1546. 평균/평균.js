const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
let numbers = input[1].split(" ").map((v) => parseInt(v));
const max = numbers.reduce((prev, cur) => {
  if (prev < cur) return cur;
  else return prev;
}, 0);
const answer =
  numbers.reduce((prev, cur) => prev + (cur / max) * 100, 0) / numbers.length;

console.log(answer);
