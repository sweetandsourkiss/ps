const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfCases = parseInt(input[0]);
let answer = "";

for (let c = 1; c <= numberOfCases; c++) {
  const [a, b] = input[c].split(" ").map((v) => parseInt(v));
  answer += `${a + b}\n`;
}

console.log(answer);
