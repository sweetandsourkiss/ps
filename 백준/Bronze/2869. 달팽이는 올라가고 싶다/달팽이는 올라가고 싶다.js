const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [upHeight, downHeight, stickHeight] = input[0]
  .split(" ")
  .map((v) => parseInt(v));
const dailyHeight = upHeight - downHeight;
const targetHeight = stickHeight - upHeight;

if (targetHeight % dailyHeight === 0) {
  console.log(targetHeight / dailyHeight + 1);
} else {
  console.log(Math.ceil(targetHeight / dailyHeight) + 1);
}
