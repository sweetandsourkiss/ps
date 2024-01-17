const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const number = parseInt(input[0]);

if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
