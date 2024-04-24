const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [row, col] = input[0].split(" ").map(Number);
const table = Array.from({ length: row }, () => Array(col));
const delta_row = [0, 1, 0, -1];
const delta_col = [1, 0, -1, 0];
let input_index = 1;

for (let r = 0; r < row; r++) {
  table[r] = input[input_index++].split(" ").map(Number);
}

const visited = Array.from({ length: row }, () => Array(col).fill(false));
let answer = 0;

const dfs = (now_row, now_col, depth, sum) => {
  if (depth === 4) {
    answer = Math.max(answer, sum);
  } else {
    for (let d = 0; d < 4; d++) {
      const new_row = now_row + delta_row[d];
      const new_col = now_col + delta_col[d];
      if (
        new_row >= 0 &&
        new_col >= 0 &&
        new_row < row &&
        new_col < col &&
        !visited[new_row][new_col]
      ) {
        visited[new_row][new_col] = true;
        dfs(new_row, new_col, depth + 1, sum + table[new_row][new_col]);
        visited[new_row][new_col] = false;
      }
    }
  }
};

for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    visited[r][c] = true;
    dfs(r, c, 1, table[r][c]);
    visited[r][c] = false;
  }
}
// ㅗ 모양은 따로 보기
for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    if (r + 2 < row) {
      if (c - 1 >= 0) {
        answer = Math.max(
          answer,
          table[r][c] + table[r + 1][c] + table[r + 2][c] + table[r + 1][c - 1]
        );
      }
      if (c + 1 < col) {
        answer = Math.max(
          answer,
          table[r][c] + table[r + 1][c] + table[r + 2][c] + table[r + 1][c + 1]
        );
      }
    }

    if (c + 2 < col) {
      if (r - 1 >= 0) {
        answer = Math.max(
          answer,
          table[r][c] + table[r][c + 1] + table[r][c + 2] + table[r - 1][c + 1]
        );
      }
      if (r + 1 < row) {
        answer = Math.max(
          answer,
          table[r][c] + table[r][c + 1] + table[r][c + 2] + table[r + 1][c + 1]
        );
      }
    }
  }
}

console.log(answer);
