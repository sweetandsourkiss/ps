const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [coin_number, goal] = input[0].split(" ").map(Number);
const coins = input.slice(1, 1 + coin_number).map(Number);

let current = goal;
let coin_index = coin_number;
let answer = 0;
while (current > 0 && coin_index >= 0) {
  if (current / coins[coin_index] >= 1) {
    answer += Math.floor(current / coins[coin_index]);
    current %= coins[coin_index];
  }
  coin_index--;
}
console.log(answer);
