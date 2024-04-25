const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [ladder_number, snake_number] = input[0].split(" ").map(Number);
const bridge = {};
let input_index = 1;
for (let l = 0; l < ladder_number; l++) {
  const [start, end] = input[input_index++].split(" ").map(Number);
  bridge[start] = end;
}
for (let s = 0; s < snake_number; s++) {
  const [start, end] = input[input_index++].split(" ").map(Number);
  bridge[start] = end;
}

const visited = Array(101).fill(false);
const queue = [];
queue.push([1, 0]);
visited[1] = true;
let queue_index = 0;
while (queue_index < queue.length) {
  const [now_pos, depth] = queue[queue_index++];
  if (now_pos === 100) {
    console.log(depth);
    break;
  }

  for (let dice = 1; dice <= 6; dice++) {
    const next_pos = bridge[now_pos + dice] || now_pos + dice;
    if (next_pos > 100 || visited[next_pos]) {
      continue;
    }
    visited[next_pos] = true;
    queue.push([next_pos, depth + 1]);
  }
}
