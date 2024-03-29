const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [tree_number, goal] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let left = 0,
  right = 1000000000;
let answer = -1;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let count = 0;
  for (const tree of trees) {
    if (tree > mid) {
      count += tree - mid;
    }
  }
  if (count < goal) {
    right = mid - 1;
  } else {
    answer = mid;
    left = mid + 1;
  }
}
console.log(answer);