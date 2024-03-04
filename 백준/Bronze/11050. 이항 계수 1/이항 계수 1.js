const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [n, r] = input[0].split(" ").map(Number);
function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(n) / (factorial(n - r) * factorial(r)));
