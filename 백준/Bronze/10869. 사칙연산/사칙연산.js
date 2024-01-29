const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [A, B] = input[0].split(" ").map((v) => parseInt(v));
console.log(`${A + B}\n${A - B}\n${A * B}\n${Math.floor(A / B)}\n${A % B}`);
