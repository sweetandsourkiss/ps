const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numbers = input.slice(0, -2);
let answer = "";
numbers.forEach((v) => {
  const reversed = v.split("").reverse().join("");
  if (v === reversed) answer += "yes\n";
  else answer += "no\n";
});

console.log(answer);
