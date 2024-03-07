const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [N, K] = input[0].split(" ").map(Number);
let circle = Array.from({ length: N }, (v, k) => k + 1);
let count = 0;
let index = 0;
let answer = [];
while (circle.length > 0) {
  if (count < K - 1) {
    count++;
    index = (index + 1) % circle.length;
  } else {
    count = 0;
    answer.push(circle[index]);
    circle = circle.filter((v, i) => i !== index);
  }
}

console.log("<" + answer.join(", ") + ">");