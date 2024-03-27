const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
// your own code here
const paper_size = Number(input[0]);
const paper = input
  .slice(1, 1 + paper_size)
  .map((v) => v.split(" ").map(Number));
let white = 0,
  blue = 0;

const split_paper = (now_size, start_row, start_col) => {
  const standard = paper[start_row][start_col];
  for (let row = start_row; row < start_row + now_size; row++) {
    for (let col = start_col; col < start_col + now_size; col++) {
      if (paper[row][col] !== standard) {
        split_paper(now_size / 2, start_row, start_col);
        split_paper(now_size / 2, start_row, start_col + now_size / 2);
        split_paper(now_size / 2, start_row + now_size / 2, start_col);
        split_paper(
          now_size / 2,
          start_row + now_size / 2,
          start_col + now_size / 2
        );
        return;
      }
    }
  }
  if (standard === 0) {
    white++;
  } else if (standard === 1) {
    blue++;
  }
};

split_paper(paper_size, 0, 0);

console.log(white);
console.log(blue);
