const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const map_size = Number(input[0]);
const map = input.slice(1, 1 + map_size).map((v) => v.split("").map(Number));
const visited = Array.from({ length: map_size }, () =>
  Array(map_size).fill(false)
);
const houses = [];

const delta_row = [-1, 1, 0, 0];
const delta_col = [0, 0, -1, 1];

const connect_house = (row, col, count) => {
  const queue = [];
  queue.push([row, col]);
  visited[row][col] = true;
  count++;
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let d = 0; d < delta_row.length; d++) {
      const new_x = x + delta_row[d];
      const new_y = y + delta_col[d];
      if (new_x < 0 || new_y < 0 || new_x >= map_size || new_y >= map_size) {
        continue;
      }
      if (map[new_x][new_y] === 1 && !visited[new_x][new_y]) {
        queue.push([new_x, new_y]);
        visited[new_x][new_y] = true;
        count++;
      }
    }
  }
  return count;
};

for (let row = 0; row < map_size; row++) {
  for (let col = 0; col < map_size; col++) {
    if (map[row][col] === 1 && !visited[row][col]) {
      houses.push(connect_house(row, col, 0));
    }
  }
}

let answer = "";
answer += houses.length + "\n";
houses.sort((a, b) => a - b);
for (const num of houses) {
  answer += num + "\n";
}

console.log(answer);
