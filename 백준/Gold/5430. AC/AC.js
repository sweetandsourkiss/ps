const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const test_number = +input[0].trim();
let answer = "";
for (let test_index = 0; test_index < test_number; test_index++) {
  const commands = input[test_index * 3 + 1].trim();
  const case_number = +input[test_index * 3 + 2].trim();
  const original_integers = input[test_index * 3 + 3].trim();
  const integers = original_integers
    .substring(1, original_integers.length - 1)
    .split(",")
    .filter((v) => v)
    .map(Number);
  let isFront = true;
  let flag = true;
  for (const command of commands.split("")) {
    if (command === "R") {
      isFront = !isFront;
    } else {
      if (integers.length === 0) {
        answer += "error\n";
        flag = false;
        break;
      }
      if (isFront) {
        integers.shift();
      } else {
        integers.pop();
      }
    }
  }
  if (flag) {
    if (isFront) {
      answer += "[" + integers + "]" + "\n";
    } else {
      answer += "[" + integers.reverse() + "]" + "\n";
    }
  }
}

console.log(answer);
