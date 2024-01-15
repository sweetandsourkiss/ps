const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const times = input
  .filter((v) => v.length)
  .map((v) => parseInt(v))
  .reduce((prev, cur) => prev * cur, 1);

const counts = Array(10).fill(0);

String(times)
  .split("")
  .forEach((v) => counts[v]++);

console.log(counts.join("\n"));
