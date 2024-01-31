const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
let words = input.slice(1).filter((v) => v !== "");
// words = words.filter((v, index) => words.indexOf(v) === index); // 중복 제거
words.sort((a, b) => {
  if (a.length === b.length) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  return a.length - b.length;
});
words = new Set(words);

console.log(Array.from(words).join("\n"));
