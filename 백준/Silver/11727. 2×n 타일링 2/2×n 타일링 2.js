const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const size = +input[0];
const dp = Array(size + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let index = 3; index <= size; index++) {
  dp[index] = (dp[index - 1] + dp[index - 2] * 2) % 10007;
}

console.log(dp[size]);