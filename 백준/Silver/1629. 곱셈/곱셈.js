const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1629
 * @description 2025.01.13
 */

let [A, B, C] = input[0].split(" ").map(BigInt);

function recursive(a, n) {
  if (n === 0n) return 1n;
  if (n === 1n) return a % C;

  if (n % 2n === 0n) {
    let result = recursive(a, n / 2n);
    return (result * result) % C;
  } else {
    let result = recursive(a, (n - 1n) / 2n);
    return (result * result * a) % C;
  }
}

console.log(recursive(A, B).toString());
