const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const targetChannel = Number(input[0]);
const errorButtonNumber = Number(input[1]);
const errorButtons =
  errorButtonNumber === 0 ? [] : input[2].split(" ").map(Number);
const nowChannel = 100;

let answer = Math.abs(nowChannel - targetChannel);

for (let i = targetChannel; i < 1000000; i++) {
  const numString = i.toString();
  let isValid = true;
  for (let j = 0; j < numString.length; j++) {
    if (errorButtons.includes(Number(numString[j]))) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    answer = Math.min(answer, Math.abs(i - targetChannel) + numString.length);
    break;
  }
}

for (let i = targetChannel; i >= 0; i--) {
  const numString = i.toString();
  let isValid = true;
  for (let j = 0; j < numString.length; j++) {
    if (errorButtons.includes(Number(numString[j]))) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    answer = Math.min(answer, Math.abs(i - targetChannel) + numString.length);
    break;
  }
}

console.log(answer);
