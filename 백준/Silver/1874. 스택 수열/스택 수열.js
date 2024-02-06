const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const number = parseInt(input[0]);
const printSequence = input
  .slice(1)
  .filter((v) => v !== "")
  .map((v) => parseInt(v));
const nowArray = [];

let numberPushedUntil = 0;
let answer = "";

for (let nowIndex = 0; nowIndex < number; nowIndex++) {
  const target = printSequence[nowIndex];
  if (target > numberPushedUntil) {
    while (numberPushedUntil < target) {
      nowArray.push(++numberPushedUntil);
      answer += "+\n";
    }
    nowArray.pop();
    answer += "-\n";
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
