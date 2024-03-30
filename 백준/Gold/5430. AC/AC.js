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
  let frontIndex = 0;
  let backIndex = integers.length - 1;
  for (const command of commands.split("")) {
    if (command === "R") {
      isFront = !isFront;
    } else {
      if (frontIndex > backIndex) {
        answer += "error\n";
        flag = false;
        break;
      }
      if (isFront) {
        frontIndex++;
      } else {
        backIndex--;
      }
    }
  }
  if (flag) {
    let _concat = [];
    if (isFront) {
      for (let i = frontIndex; i <= backIndex; i++) {
        _concat.push(integers[i]);
      }
    } else {
      for (let i = backIndex; i >= frontIndex; i--) {
        _concat.push(integers[i]);
      }
    }
    answer += "[" + _concat + "]" + "\n";
  }
}

console.log(answer);
