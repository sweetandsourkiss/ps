const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const commandNumber = Number(input[0]);
const array = [];
const answer = [];
for (let c = 0; c < commandNumber; c++) {
  const [text, number] = input[c + 1].split(" ");
  if (text === "push") {
    array.push(Number(number));
  } else if (text === "front") {
    if (array.length === 0) {
      answer.push(-1);
    } else {
      answer.push(array[0]);
    }
  } else if (text === "back") {
    if (array.length === 0) {
      answer.push(-1);
    } else {
      answer.push(array[array.length - 1]);
    }
  } else if (text === "size") {
    answer.push(array.length);
  } else if (text === "empty") {
    if (array.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (text === "pop") {
    if (array.length === 0) {
      answer.push(-1);
    } else {
      answer.push(array.shift());
    }
  }
}

console.log(answer.join("\n"));
