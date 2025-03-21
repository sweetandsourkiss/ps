/**
 * @author sweetandsourkiss
 * @name boj 12865
 * @description 2025.03.21
 *  */

const fs = require("fs");
const route = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(route).toString().split("\n");

const [N, K] = input[0].trim().split(" ").map(Number);
const things = input.slice(1).map((v) => v.trim().split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
for (let n = 1; n <= N; n++) {
  const _weight = things[n - 1][0];
  const _value = things[n - 1][1];
  //   console.log(_weight, _value);
  for (let k = 1; k <= K; k++) {
    if (_weight > k) {
      dp[n][k] = Math.max(dp[n][k - 1], dp[n - 1][k]);
    } else {
      dp[n][k] = Math.max(dp[n - 1][k - _weight] + _value, dp[n - 1][k]);
    }
  }
}

console.log(dp[N][K]);
