const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const size = +input[0];
const map = Array.from({ length: size }, () => Array(size));
let index = 1;
for (let i = 0; i < size; i++) {
  map[i] = input[index++].trim().split("");
}

let del_row = [-1, 1, 0, 0];
let del_col = [0, 0, -1, 1];
let answer = [];

const find_district = (target, now_row, now_col, is_eye_ok, visited) => {
  for (let d = 0; d < 4; d++) {
    const new_row = now_row + del_row[d];
    const new_col = now_col + del_col[d];
    if (
      new_row >= 0 &&
      new_row < size &&
      new_col >= 0 &&
      new_col < size &&
      !visited[new_row][new_col]
    ) {
      if (is_eye_ok) {
        if (map[new_row][new_col] === target) {
          visited[new_row][new_col] = true;
          find_district(target, new_row, new_col, is_eye_ok, visited);
        }
      } else {
        if (target === "B") {
          if (map[new_row][new_col] === target) {
            visited[new_row][new_col] = true;
            find_district(target, new_row, new_col, is_eye_ok, visited);
          }
        } else {
          if (map[new_row][new_col] === "R" || map[new_row][new_col] === "G") {
            visited[new_row][new_col] = true;
            find_district(target, new_row, new_col, is_eye_ok, visited);
          }
        }
      }
    }
  }
};

let visited = Array.from({ length: size }, () => Array(size).fill(false));
let count = 0;
for (let r = 0; r < size; r++) {
  for (let c = 0; c < size; c++) {
    if (!visited[r][c]) {
      visited[r][c] = true;
      find_district(map[r][c], r, c, true, visited);
      count++;
    }
  }
}
answer.push(count);
visited = Array.from({ length: size }, () => Array(size).fill(false));
count = 0;

for (let r = 0; r < size; r++) {
  for (let c = 0; c < size; c++) {
    if (!visited[r][c]) {
      visited[r][c] = true;
      find_district(map[r][c], r, c, false, visited);
      count++;
    }
  }
}
answer.push(count);

console.log(answer.join(" "));
