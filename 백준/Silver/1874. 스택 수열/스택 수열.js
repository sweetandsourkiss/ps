const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const number = parseInt(input[0]);
const oneToNumber = Array.from({ length: number }, (__, index) => index + 1);
const printSequence = input
  .slice(1)
  .filter((v) => v !== "")
  .map((v) => parseInt(v));
const nowArray = [];

let numberPushedUntil = 0;
let answer = "";

while (printSequence.length > 0) {
  const target = printSequence.shift();
  if (target > numberPushedUntil) {
    for (var blank of Array(target - numberPushedUntil)) {
      nowArray.push(oneToNumber.shift());
      answer += "+\n";
    }
    nowArray.pop();
    answer += "-\n";
    numberPushedUntil = target;
  } else {
    if (nowArray[nowArray.length - 1] === target) {
      nowArray.pop();
      answer += "-\n";
    } else {
      console.log("NO");
      return;
    }
  }
}

console.log(answer);
