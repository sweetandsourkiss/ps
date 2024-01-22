const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const remainders = [];

input
  .filter((v) => v !== "")
  .forEach((v) => {
    const r = v % 42;
    if (remainders.filter((v) => v === r).length === 0) {
      remainders.push(r);
    }
  });
console.log(remainders.length);
