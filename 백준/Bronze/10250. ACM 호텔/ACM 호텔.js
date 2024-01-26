const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const cases = parseInt(input[0]);

for (let i = 0; i < cases; i++) {
  const [H, W, N] = input[i + 1].split(" ").map((v) => parseInt(v));
  const height = N % H === 0 ? H : N % H;
  const number = Math.ceil(N / H);
  console.log(height * 100 + number);
}
