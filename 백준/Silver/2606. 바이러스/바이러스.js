const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const computer_number = Number(input[0]);
const connect_number = Number(input[1]);
const adj_array = Array.from({ length: computer_number + 1 }, () =>
  Array(computer_number + 1).fill(false)
);
input
  .slice(2, 2 + connect_number)
  .map((v) => v.trim().split(" ").map(Number))
  .forEach((v) => {
    const [x, y] = v;
    adj_array[x][y] = true;
    adj_array[y][x] = true;
  });
const queue = [];
const visited = Array(computer_number + 1).fill(false);

queue.push(1);
visited[1] = true;
let answer = 0;
while (queue.length > 0) {
  const node = queue.shift();
  for (let index = 1; index <= computer_number; index++) {
    if (adj_array[node][index] && !visited[index]) {
      visited[index] = true;
      queue.push(index);
      answer++;
    }
  }
}
console.log(answer);
