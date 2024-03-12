const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const test_case_number = Number(input[0]);
let startIndex = 1;
let answer = "";

const deltaRow = [1, -1, 0, 0];
const deltaCol = [0, 0, -1, 1];

for (let case_number = 1; case_number <= test_case_number; case_number++) {
  const [row, col, cabbages] = input[startIndex].split(" ").map(Number);
  cabbageIndex = startIndex + 1;
  startIndex += cabbages + 1;
  const field = Array.from({ length: row }, () => Array(col).fill(0));
  for (cabbageIndex; cabbageIndex < startIndex; cabbageIndex++) {
    const [_row, _col] = input[cabbageIndex].split(" ").map(Number);
    field[_row][_col] = 1;
  }
  const throwEarthworm = (r, c) => {
    field[r][c] = 0;
    for (let delta = 0; delta < 4; delta++) {
      const newRow = r + deltaRow[delta];
      const newCol = c + deltaCol[delta];
      if (newRow >= row || newCol >= col || newRow < 0 || newCol < 0) continue;
      if (field[newRow][newCol] === 1) {
        throwEarthworm(newRow, newCol);
      }
    }
  };

  let earthworm = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (field[r][c] === 1) {
        earthworm++;
        throwEarthworm(r, c);
      }
    }
  }

  answer += earthworm + "\n";
}

console.log(answer);