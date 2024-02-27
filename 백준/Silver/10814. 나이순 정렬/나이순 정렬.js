const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const memberNumber = Number(input[0]);
const members = input
  .slice(1)
  .filter((v) => v !== "")
  .map((member) => member.trim().split(" "));
members.sort((a, b) => a[0] - b[0]);

console.log(members.map((member) => member.join(" ")).join("\n"));
