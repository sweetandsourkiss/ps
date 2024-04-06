const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const test_number = +input[0];
let index = 1;
let answer = [];
let count;
const dp = Array(12);

const dfs = (now) => {
  if (now === 0) {
    count++;
  } else {
    if (now > 0) {
      dfs(now - 1);
    }
    if (now > 1) {
      dfs(now - 2);
    }
    if (now > 2) {
      dfs(now - 3);
    }
  }
};

for (let t = 0; t < test_number; t++) {
  count = 0;
  const goal = +input[index++];
  if (dp[goal]) {
    answer.push(dp[goal]);
  } else {
    dfs(goal);
    dp[goal] = count;
    answer.push(count);
  }
}
console.log(answer.join("\n"));
