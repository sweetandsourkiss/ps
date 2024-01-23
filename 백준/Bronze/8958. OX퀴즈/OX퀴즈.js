const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const cases = parseInt(input[0]);
let answer = "";
for (let i = 0; i < cases; i++) {
  const q = input[i + 1].split("");
  let index = 0,
    streak = 0,
    score = 0;
  while (index < q.length) {
    if (q[index] === "O") {
      streak++;
      score += streak;
    } else {
      streak = 0;
    }
    index++;
  }
  answer += score + "\n";
}

console.log(answer);
