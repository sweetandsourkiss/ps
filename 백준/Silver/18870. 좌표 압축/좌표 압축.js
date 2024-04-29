const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const number_number = +input[0];
const numbers = input[1].split(" ").map(Number);
const set = new Set(numbers);
const array = Array.from(set);
array.sort((a, b) => a - b);
const map = {};
array.forEach((v, idx) => {
  map[v] = idx;
});
console.log(numbers.map((v) => map[v]).join(" "));
