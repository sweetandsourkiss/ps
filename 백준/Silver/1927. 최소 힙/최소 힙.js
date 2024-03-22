const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const cal_number = Number(input[0]);
const commands = input.slice(1, 1 + cal_number).map((v) => Number(v.trim()));
const hip = [];
let answer = [];

const bubbleUp = () => {
  let now_index = hip.length - 1;
  while (now_index > 0) {
    const parent_index =
      now_index % 2 === 0 ? now_index / 2 - 1 : Math.floor(now_index / 2);
    if (hip[parent_index] > hip[now_index]) {
      [hip[now_index], hip[parent_index]] = [hip[parent_index], hip[now_index]];
      now_index = parent_index;
    } else {
      break;
    }
  }
};

const bubbleDown = () => {
  let now_index = 0;
  answer.push(hip[0]);
  hip[0] = hip[hip.length - 1];
  hip.pop();
  while (true) {
    const [left_index, right_index] = [now_index * 2 + 1, now_index * 2 + 2];
    if (left_index < hip.length) {
      if (right_index < hip.length) {
        const smaller_index =
          hip[left_index] <= hip[right_index] ? left_index : right_index;
        if (hip[smaller_index] < hip[now_index]) {
          [hip[now_index], hip[smaller_index]] = [
            hip[smaller_index],
            hip[now_index],
          ];
          now_index = smaller_index;
        } else {
          break;
        }
      } else {
        if (hip[left_index] < hip[now_index]) {
          [hip[now_index], hip[left_index]] = [hip[left_index], hip[now_index]];
          now_index = left_index;
        } else {
          break;
        }
      }
    } else {
      break;
    }
  }
};

for (const number of commands) {
  if (number === 0) {
    if (hip.length === 0) {
      answer.push(0);
    } else {
      bubbleDown();
    }
  } else {
    hip.push(number);
    bubbleUp();
  }
}
console.log(answer.join("\n"));
