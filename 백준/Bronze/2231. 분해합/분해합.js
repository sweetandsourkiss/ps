const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const targetNumber = parseInt(input[0]);

let answer = 0;

for (let number = 1; number <= targetNumber; number++) {
  let _partialSum = number;
  for (
    let remainder = number;
    remainder > 0;
    remainder = Math.floor(remainder / 10)
  ) {
    _partialSum += remainder % 10;
  }
  if (_partialSum === targetNumber) {
    answer = number;
    break;
  }
}

console.log(answer);
