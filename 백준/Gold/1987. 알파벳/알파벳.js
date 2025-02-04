const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1987
 * @description 2025.02.04
 */

const [R, C] = input[0].split(" ").map(Number);

const board = [];

const CHAR_CODE_OF_A = 65;
for (let i = 1; i <= R; i++) {
  const chars = input[i].trim().split("");
  board.push(chars);
}

// 유니크 문자 수 계산
const uniqueChars = new Set(board.flat());
const totalUnique = uniqueChars.size;

let result = 0;

const dfs = (nowR, nowC, visited, cnt) => {
  if (result === totalUnique) return;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    const newR = nowR + dx[i];
    const newC = nowC + dy[i];
    if (newR >= 0 && newR < R && newC >= 0 && newC < C) {
      const charBit = 1 << (board[newR][newC].charCodeAt(0) - CHAR_CODE_OF_A);
      if ((visited & charBit) === 0) {
        dfs(newR, newC, visited | charBit, cnt + 1);
      }
    }
  }

  result = Math.max(result, cnt);
};

dfs(0, 0, 1 << (board[0][0].charCodeAt(0) - CHAR_CODE_OF_A), 1);

console.log(result);
