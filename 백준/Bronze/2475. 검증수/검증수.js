const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const unitsOfPowers = [0, 1, 4, 9, 6, 5, 6, 9, 4, 1]; // 0부터 9까지 제곱한 수의 일의 자리 수
const units = input[0].split(" ").map((v) => unitsOfPowers[parseInt(v)]); // 입력받은 수를 제곱한 수의 일의 자리 수를 담은 배열

const answer =
  units.reduce((prev, cur) => {
    return prev + cur;
  }, 0) % 10; // 출력값

console.log(answer);
