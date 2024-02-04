const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [K, N] = input[0].split(" ").map((v) => parseInt(v));
const cables = input
  .slice(1)
  .filter((v) => v !== "")
  .map((v) => parseInt(v));

let left = 1;
let right = cables.reduce((prev, cur) => {
  return prev < cur ? cur : prev;
}, 0);

let mid;

while (left < right) {
  mid = Math.ceil((left + right) / 2);
  const count = cables.reduce((prev, cur) => {
    return prev + Math.floor(cur / mid);
  }, 0);
  if (count < N) {
    right = mid - 1;
  } else {
    left = mid;
  }
}

console.log(left);
