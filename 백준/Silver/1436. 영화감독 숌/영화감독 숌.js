const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const seriesNumber = parseInt(input[0]);

let target = 666;
let count = 0;
let answer = "";

while (true) {
  const targetToString = String(target);
  if (targetToString.includes("666")) {
    count++;
  }
  if (count === seriesNumber) {
    answer = target;
    break;
  } else {
    target++;
  }
}

console.log(answer);
