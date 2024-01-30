const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [N, M] = input[0].split(" ").map((v) => parseInt(v));
const board = input
  .slice(1)
  .filter((v) => v !== "")
  .map((v) => v.split(""));
let answer = Number.POSITIVE_INFINITY;
// 시작 인덱스 정하기
for (let rowIndex = 0; rowIndex + 7 < N; rowIndex++) {
  for (let colIndex = 0; colIndex + 7 < M; colIndex++) {
    // 왼쪽 위가 'W'인 경우
    let count = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        // 인덱스 합이 홀수, 짝수인 경우로 구분
        if ((rowIndex + colIndex + r + c) % 2 === 0) {
          if (board[rowIndex + r][colIndex + c] !== "W") count++;
        } else {
          if (board[rowIndex + r][colIndex + c] !== "B") count++;
        }
      }
    }
    answer = Math.min(answer, count);

    // 왼쪽 위가 'B'인 경우
    count = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        // 인덱스 합이 홀수, 짝수인 경우로 구분
        if ((rowIndex + colIndex + r + c) % 2 === 0) {
          if (board[rowIndex + r][colIndex + c] !== "B") count++;
        } else {
          if (board[rowIndex + r][colIndex + c] !== "W") count++;
        }
      }
    }
    answer = Math.min(answer, count);
  }
}

console.log(answer);
