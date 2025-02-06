const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 2206
 * @description 2025.02.06
 */

const [N, M] = input[0].split(" ").map(Number);

const map = [];

for (let i = 1; i <= N; i++) {
  const line = input[i]
    .trim()
    .split("")
    .map((v) => v === "0");
  map.push(line);
}

const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => [false, false]));
visited[0][0][1] = true;

const queue = [];
let front = 0;
queue.push([0, 0, 1, 1]);

const dx = [1, 0, 0, -1];
const dy = [0, 1, -1, 0];

while (front < queue.length) {
  const [x, y, isBreakable, depth] = queue[front++];

  if (x === N - 1 && y === M - 1) {
    console.log(depth);
    return;
  }

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (map[nx][ny] && !visited[nx][ny][isBreakable]) {
        visited[nx][ny][isBreakable] = true;
        queue.push([nx, ny, isBreakable, depth + 1]);
      } else if (!map[nx][ny] && isBreakable && !visited[nx][ny][0]) {
        visited[nx][ny][0] = true;
        queue.push([nx, ny, 0, depth + 1]);
      }
    }
  }
}

console.log("-1");
