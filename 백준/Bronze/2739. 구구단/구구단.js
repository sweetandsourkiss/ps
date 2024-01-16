const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const number = parseInt(input[0]);

let answer = "";

Array(9)
  .fill(null)
  .forEach((v, index) => {
    answer += `${number} * ${index + 1} = ${number * (index + 1)}` + "\n";
  });

console.log(answer);
