const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const target_integer = Number(input[0]);
const dp = Array(target_integer + 1);
dp[1] = 0;
for (let integer = 2; integer <= target_integer; integer++) {
  dp[integer] =
    Math.min(
      dp[integer - 1],
      integer % 2 === 0 ? dp[integer / 2] : Number.POSITIVE_INFINITY,
      integer % 3 === 0 ? dp[integer / 3] : Number.POSITIVE_INFINITY
    ) + 1;
}
console.log(dp[target_integer]);