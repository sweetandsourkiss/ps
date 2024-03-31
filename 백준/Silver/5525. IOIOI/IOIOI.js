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
let target_index = 0;
let goal_index = 0;
while (target_index < target_number) {
  if (target[target_index] === goal[goal_index]) {
    target_index++;
    goal_index++;
    if (goal_index === goal.length) {
      count++;
      goal_index -= 2;
    }
  } else {
    if (goal_index === 0) {
      target_index++;
    }
    goal_index = 0;
  }
}
console.log(count);
