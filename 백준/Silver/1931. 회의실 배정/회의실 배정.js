const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const N = Number(input[0]);
const conferences = input.slice(1).map((v) => v.trim().split(" ").map(Number));
conferences.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let now_end_time = 0;
let answer = 0;
for (const [start, end] of conferences) {
  if (start >= now_end_time) {
    now_end_time = end;
    answer++;
  }
}
console.log(answer);