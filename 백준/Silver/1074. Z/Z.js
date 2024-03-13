const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [SIZE, ROW, COLUMN] = input[0].split(" ").map(Number);
let answer = -1;
const searchPosition = (nowSize, count, standardRow, standardCol) => {
  if (nowSize === 2) {
    if (ROW === standardRow && COLUMN === standardCol) {
      answer = count;
    } else if (ROW === standardRow && COLUMN === standardCol + 1) {
      answer = count + 1;
    } else if (ROW === standardRow + 1 && COLUMN === standardCol) {
      answer = count + 2;
    } else {
      answer = count + 3;
    }
  } else {
    // 4개 구역 중 어느 파트에 있는지 찾기
    if (ROW < standardRow + nowSize / 2 && COLUMN < standardCol + nowSize / 2) {
      // 좌상단
      searchPosition(nowSize / 2, count, standardRow, standardCol);
    } else if (
      ROW < standardRow + nowSize / 2 &&
      COLUMN >= standardCol + nowSize / 2
    ) {
      searchPosition(
        nowSize / 2,
        count + Math.pow(nowSize / 2, 2),
        standardRow,
        standardCol + nowSize / 2
      );
      // 우상단
    } else if (
      ROW >= standardRow + nowSize / 2 &&
      COLUMN < standardCol + nowSize / 2
    ) {
      // 좌하단
      searchPosition(
        nowSize / 2,
        count + 2 * Math.pow(nowSize / 2, 2),
        standardRow + nowSize / 2,
        standardCol
      );
    } else {
      // 우하단
      searchPosition(
        nowSize / 2,
        count + 3 * Math.pow(nowSize / 2, 2),
        standardRow + nowSize / 2,
        standardCol + nowSize / 2
      );
    }
  }
};
searchPosition(Math.pow(2, SIZE), 0, 0, 0);

console.log(answer);