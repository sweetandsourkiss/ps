const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const targetRoom = parseInt(input[0]);
let interval = 6;
let frontTerminal = 1;

if (targetRoom === 1) {
  console.log(1);
} else {
  for (let range = 2; ; range++) {
    if (targetRoom > frontTerminal && targetRoom <= frontTerminal + interval) {
      console.log(range);
      return;
    } else {
      frontTerminal += interval;
      interval += 6;
    }
  }
}
