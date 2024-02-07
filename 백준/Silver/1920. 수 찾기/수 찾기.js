const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfIntegers = parseInt(input[0]);
const integers = input[1].split(" ").map((v) => parseInt(v));
const numberOfTargets = parseInt(input[2]);
const targets = input[3].split(" ").map((v) => parseInt(v));

integers.sort((a, b) => a - b);
let answer = "";

targets.forEach((_target) => {
  let left = 0,
    right = numberOfIntegers - 1;
  let flag = false;

  while (left <= right) {
    const _mid = Math.floor((left + right) / 2);
    if (_target < integers[_mid]) {
      right = _mid - 1;
    } else if (_target > integers[_mid]) {
      left = _mid + 1;
    } else {
      flag = true;
      break;
    }
  }
  if (flag) answer += "1\n";
  else answer += "0\n";
});

console.log(answer);
