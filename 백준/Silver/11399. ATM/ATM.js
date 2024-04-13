const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const number = +input[0];
const times = input[1].trim().split(" ").map(Number);
const time_array = Array(1001).fill(0);
for (const time of times) {
  time_array[time]++;
}
let index = 1;
let count = 0;
let answer = 0;
while (count < number) {
  if (time_array[index] > 0) {
    time_array[index]--;
    answer += index * (number - count);
    count++;
  } else {
    index++;
  }
}

console.log(answer);
