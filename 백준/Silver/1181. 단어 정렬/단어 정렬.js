const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
let words = input.slice(1).filter((v) => v !== "");
// 중복 제거
words = words.filter((v, index) => words.indexOf(v) === index);
words.sort().sort((a, b) => {
  return a.length - b.length;
});

console.log(words.join("\n"));
