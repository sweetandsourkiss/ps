const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [row, col] = input[0].split(" ").map(Number);
const table = Array.from({ length: row }, () => Array(col));
let index = 1;
for (let r = 0; r < row; r++) {
  table[r] = input[index++].split(" ").map(Number);
}
let start_row, start_col;

for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    if (table[r][c] === 2) {
      start_row = r;
      start_col = c;
      break;
    }
  }
  if (start_row) {
    break;
  }
}

const delta_row = [1, 0, -1, 0];
const delta_col = [0, 1, 0, -1];

const visited = Array.from({ length: row }, () => Array(col).fill(false));
const queue = [];
table[start_row][start_col] = 0;
queue.push([start_row, start_col, 0]);
visited[start_row][start_col] = true;
let queue_index = 0;

while (queue_index < queue.length) {
  const [now_row, now_col, depth] = queue[queue_index++];

  for (let d = 0; d < delta_row.length; d++) {
    const new_row = now_row + delta_row[d];
    const new_col = now_col + delta_col[d];
    if (
      new_row >= 0 &&
      new_col >= 0 &&
      new_row < row &&
      new_col < col &&
      table[new_row][new_col] === 1 &&
      !visited[new_row][new_col]
    ) {
      visited[new_row][new_col] = true;
      table[new_row][new_col] = depth + 1;
      queue.push([new_row, new_col, depth + 1]);
    }
  }
}

for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    if (table[r][c] === 1 && !visited[r][c]) {
      table[r][c] = -1;
    }
  }
}

console.log(table.join("\n").replaceAll(",", " "));
