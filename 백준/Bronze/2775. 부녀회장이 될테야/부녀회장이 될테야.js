const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const testCaseNumber = parseInt(input[0]);
const apartment = Array.from({ length: 15 }, () => Array(15).fill(0));

for (let floorNumber = 0; floorNumber <= 14; floorNumber++) {
  for (let roomNumber = 1; roomNumber <= 14; roomNumber++) {
    if (floorNumber === 0) {
      apartment[0][roomNumber] = apartment[0][roomNumber - 1] + roomNumber;
    } else {
      apartment[floorNumber][roomNumber] =
        apartment[floorNumber - 1][roomNumber] +
        apartment[floorNumber][roomNumber - 1];
    }
  }
}

let answer = "";
for (let caseNumber = 1; caseNumber <= testCaseNumber; caseNumber++) {
  const floorNumber = parseInt(input[caseNumber * 2 - 1]);
  const roomNumber = parseInt(input[caseNumber * 2]);
  answer += `${
    apartment[floorNumber][roomNumber] - apartment[floorNumber][roomNumber - 1]
  }\n`;
}

console.log(answer);
