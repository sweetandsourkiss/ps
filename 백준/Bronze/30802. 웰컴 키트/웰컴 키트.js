const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 30802
 * @description 2025.01.06
 */

const 참가자의수 = input[0];
const 티셔츠_사이즈별_신청자의_수 = input[1].split(" ").map(Number);
const [티셔츠_묶음_수, 펜_묶음_수] = input[2].split(" ").map(Number);

let 티셔츠_총_묶음_수 = 0;

for (let index = 0; index < 티셔츠_사이즈별_신청자의_수.length; index++) {
  티셔츠_총_묶음_수 += Math.ceil(티셔츠_사이즈별_신청자의_수[index] / 티셔츠_묶음_수);
}

const [펜_총_묶음_수, 펜_총_낱개_수] = [Math.floor(참가자의수 / 펜_묶음_수), 참가자의수 % 펜_묶음_수];

console.log(티셔츠_총_묶음_수);
console.log(펜_총_묶음_수, 펜_총_낱개_수);
