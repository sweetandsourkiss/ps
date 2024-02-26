const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberNum = Number(input[0]);
const numberList = [];

for (let i = 1; i <= numberNum; i++) {
  const tmp_number = Number(input[i]);
  if (tmp_number !== 0) {
    numberList.push(tmp_number);
  } else {
    numberList.pop();
  }
}

console.log(numberList.reduce((acc, cur) => acc + cur, 0));
