const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1918
 * @description 2025.01.17
 */

const str = input[0];

const stack = [];
let postfix = "";
const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "(": 0 };

for (let char of str) {
  if (char >= "A" && char <= "Z") {
    postfix += char;
  } else if (char === "(") {
    stack.push(char);
  } else if (char === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      postfix += stack.pop();
    }
    stack.pop(); // Remove '('
  } else {
    while (stack.length && precedence[stack[stack.length - 1]] >= precedence[char]) {
      postfix += stack.pop();
    }
    stack.push(char);
  }
}

while (stack.length) {
  postfix += stack.pop();
}

console.log(postfix);
