const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const caseNum = Number(input[0]);
let answer = "";

for (let i = 1; i <= caseNum; i++) {
  const parenthesis = input[i].split("");
  let stack = [];
  let isVPS = true;
  for (let bracket of parenthesis) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        isVPS = false;
        break;
      }
    }
  }

  if (stack.length !== 0) {
    isVPS = false;
  }

  if (isVPS) {
    answer += "YES\n";
  } else {
    answer += "NO\n";
  }
}

console.log(answer);
