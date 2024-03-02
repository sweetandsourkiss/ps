const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const commandNumber = Number(input[0]);
const deque = [];
const answer = [];
for (let c = 0; c < commandNumber; c++) {
  const [text, number] = input[c + 1].split(" ");
  switch (text) {
    case "push_front":
      deque.unshift(number);
      break;
    case "push_back":
      deque.push(number);
      break;
    case "pop_front":
      deque.length === 0 ? answer.push(-1) : answer.push(deque.shift());
      break;
    case "pop_back":
      deque.length === 0 ? answer.push(-1) : answer.push(deque.pop());
      break;
    case "front":
      deque.length === 0 ? answer.push(-1) : answer.push(deque[0]);
      break;
    case "back":
      deque.length === 0
        ? answer.push(-1)
        : answer.push(deque[deque.length - 1]);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      deque.length === 0 ? answer.push(1) : answer.push(0);
      break;
  }
}

console.log(answer.join("\n"));
