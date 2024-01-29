const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [N, X] = input[0].split(" ").map((v) => parseInt(v));
const numbers = input[1].split(" ").map((v) => parseInt(v));

console.log(numbers.filter((v) => v < X).join(" "));
