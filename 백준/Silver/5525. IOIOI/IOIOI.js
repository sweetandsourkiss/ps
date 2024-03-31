const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const repeat = +input[0];
const target_number = +input[1];
const target = input[2];
let goal = "I";
for (let i = 0; i < repeat; i++) {
  goal += "OI";
}
let count = 0;
for (let i = 0; i <= target_number - (repeat * 2 + 1); i++) {
  if (target[i] === "I") {
    const sub_string = target.substring(i, i + (repeat * 2 + 1));
    if (goal === sub_string) {
      count++;
    }
  }
}
console.log(count);