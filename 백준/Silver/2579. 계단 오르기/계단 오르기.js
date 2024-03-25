const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const stair_number = Number(input[0]);
const stairs = input.slice(1, 1 + stair_number).map((v) => Number(v.trim()));
stairs.unshift(0);
const dp = Array(stair_number + 1);
dp[1] = stairs[1];
if (stair_number >= 2) {
  dp[2] = dp[1] + stairs[2];
  dp[3] = Math.max(stairs[1], stairs[2]) + stairs[3];
  for (let index = 4; index <= stair_number; index++) {
    dp[index] =
      Math.max(dp[index - 3] + stairs[index - 1], dp[index - 2]) +
      stairs[index];
  }
}
console.log(dp[stair_number]);