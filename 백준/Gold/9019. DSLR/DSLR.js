const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const test_number = +input[0];
let index = 1;

const cal_d = (value) => (value * 2) % 10000;
const cal_s = (value) => (value - 1 < 0 ? 9999 : value - 1);
const cal_l = (value) =>
  Math.floor((value % 1000) * 10) + Math.floor(value / 1000);
const cal_r = (value) => Math.floor(value / 10) + (value % 10) * 1000;

let answer = [];
for (let t = 0; t < test_number; t++) {
  const [initial_value, target] = input[index++].split(" ").map(Number);
  const memo = Array(10000).fill("");
  memo[initial_value] = "I";
  const queue = [];
  let q_index = 0;
  let res = cal_d(initial_value);
  if (memo[res] == "") {
    queue.push(res);
    memo[res] = "D";
  }
  res = cal_s(initial_value);
  if (memo[res] == "") {
    queue.push(res);
    memo[res] = "S";
  }
  res = cal_l(initial_value);
  if (memo[res] == "") {
    queue.push(res);
    memo[res] = "L";
  }
  res = cal_r(initial_value);
  if (memo[res] == "") {
    queue.push(res);
    memo[res] = "R";
  }
  while (true) {
    const now_value = queue[q_index++];
    if (now_value === target) {
      answer.push(memo[now_value]);
      break;
    } else {
      res = cal_d(now_value);
      if (memo[res] == "") {
        queue.push(res);
        memo[res] = memo[now_value] + "D";
      }
      res = cal_s(now_value);
      if (memo[res] == "") {
        queue.push(res);
        memo[res] = memo[now_value] + "S";
      }
      res = cal_l(now_value);
      if (memo[res] == "") {
        queue.push(res);
        memo[res] = memo[now_value] + "L";
      }
      res = cal_r(now_value);
      if (memo[res] == "") {
        queue.push(res);
        memo[res] = memo[now_value] + "R";
      }
    }
  }
}

console.log(answer.join("\n"));
