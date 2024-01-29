const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const casesOfAddition = input.filter((v) => v.length);
let answer = "";

for (const c of casesOfAddition) {
  const [a, b] = c.split(" ").map((v) => parseInt(v));
  answer += `${a + b}\n`;
}

console.log(answer);
