const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 28702
 * @description 2025.01.07
 */

/**
 * 3개의 연속된 수 중 i가 그대로 출력되는 경우가 반드시 존재하므로
 * 그 숫자가 몇번째 인지를 기준으로 다음에 올 수를 알 수 있다
 */
for (let i = 2; i >= 0; i--) {
  if (Number(input[i])) {
    const target = Number(input[i]) + (3 - i);
    if (target % 3 === 0 && target % 5 === 0) {
      console.log("FizzBuzz");
    } else if (target % 3 === 0) {
      console.log("Fizz");
    } else if (target % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(target);
    }
    break;
  }
}
