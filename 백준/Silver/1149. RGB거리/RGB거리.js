const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1149
 * @description 2025.01.08
 */

const houseNumber = Number(input[0]);
const dp = Array.from({ length: houseNumber + 1 }, () => Array(3).fill(0));

for (let index = 1; index <= houseNumber; index++) {
  const [red, green, blue] = input[index].split(" ").map(Number);
  dp[index][0] = Math.min(dp[index - 1][1], dp[index - 1][2]) + red;
  dp[index][1] = Math.min(dp[index - 1][0], dp[index - 1][2]) + green;
  dp[index][2] = Math.min(dp[index - 1][0], dp[index - 1][1]) + blue;
}

console.log(Math.min(dp[houseNumber][0], dp[houseNumber][1], dp[houseNumber][2]));
