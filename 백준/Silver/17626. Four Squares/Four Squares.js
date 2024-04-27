const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const target = +input[0];

let answer = 5;

const wear_root = (number) => {
  return Math.floor(Math.sqrt(number));
};

const dfs = (now, depth) => {
  if (now === 0) {
    answer = Math.min(depth, answer);
    return;
  }

  if (depth >= answer - 1 || depth >= 4) {
    return;
  }

  for (let i = wear_root(now); i >= 1; i--) {
    dfs(now - Math.pow(i, 2), depth + 1);
  }
};

for (let i = wear_root(target); i >= 1; i--) {
  dfs(target - Math.pow(i, 2), 1);
}

console.log(answer);
