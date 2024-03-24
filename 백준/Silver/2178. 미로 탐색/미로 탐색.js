const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [destRow, destCol] = input[0].split(" ").map((v) => Number(v) - 1);
const laby = input.slice(1).map((v) => v.trim().split("").map(Number));
const deltaRow = [-1, 1, 0, 0];
const deltaCol = [0, 0, -1, 1];
// console.log(destRow, destCol);
// console.log(laby);
const queue = [];
const visited = Array.from({ length: laby.length }, () =>
  Array(laby[0].length).fill(false)
);
// console.log(visited);
queue.push([0, 0, 1]);
visited[0][0] = true;
while (queue.length > 0) {
  // console.log(queue);
  const [nowRow, nowCol, depth] = queue.shift();
  if (nowRow === destRow && nowCol === destCol) {
    console.log(depth);
    return;
  }
  for (let dIdx = 0; dIdx < deltaRow.length; dIdx++) {
    const newRow = nowRow + deltaRow[dIdx];
    const newCol = nowCol + deltaCol[dIdx];
    if (
      newRow < 0 ||
      newCol < 0 ||
      newRow >= laby.length ||
      newCol >= laby[0].length
    ) {
      continue;
    }
    if (laby[newRow][newCol] === 1 && !visited[newRow][newCol]) {
      visited[newRow][newCol] = true;
      queue.push([newRow, newCol, depth + 1]);
    }
  }
}
