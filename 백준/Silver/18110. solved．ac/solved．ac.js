const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfPerson = Number(input[0]);
if (numberOfPerson === 0) {
  console.log(0);
  return;
}
const scores = input
  .slice(1)
  .filter((v) => v)
  .map(Number)
  .sort((a, b) => a - b);
const excludePerson = Math.round(numberOfPerson * 0.15);
const answer = Math.round(
  scores
    .slice(excludePerson, scores.length - excludePerson)
    .reduce((prev, cur) => prev + cur, 0) /
    (numberOfPerson - excludePerson * 2)
);
console.log(answer);
