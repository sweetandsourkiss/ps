const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [a, b] = input[0].split(" ").map((v) => parseInt(v));

console.log(a * b);
