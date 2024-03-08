const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const lengthOfTarget = Number(input[0]);
const target = input[1].trim();
const [r, M] = [31, 1234567891];
let answer = 0;
let pow = 1;
target.split("").forEach((value) => {
  answer = (answer + (((value.charCodeAt(0) - 96) * pow) % M)) % M;
  pow = (pow * r) % M;
});

console.log(answer % M);
