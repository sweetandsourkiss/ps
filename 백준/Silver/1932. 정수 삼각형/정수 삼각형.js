const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1932
 * @description 2025.02.04
 */

const size = parseInt(input[0]);
const triangle = Array.from({ length: size }, () => []);

for (let index = 1; index <= size; index++) {
  const numbers = input[index].split(" ").map(Number);
  numbers.forEach((v) => {
    triangle[index - 1].push(v);
  });
}

const sumTriangle = Array.from({ length: size }, () => Array(size).fill(0));

sumTriangle[0][0] = triangle[0][0];

for (let i = 1; i < size; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      sumTriangle[i][j] = sumTriangle[i - 1][j] + triangle[i][j];
    } else {
      sumTriangle[i][j] = Math.max(sumTriangle[i - 1][j - 1], sumTriangle[i - 1][j]) + triangle[i][j];
    }
  }
}

const result = sumTriangle[size - 1].reduce((prev, curr) => {
  return Math.max(prev, curr);
}, 0);

console.log(result);
