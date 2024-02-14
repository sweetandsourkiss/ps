const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const targetRoom = parseInt(input[0]);
let maxValueInRange = 1;
let range = 1;

while (targetRoom > maxValueInRange) {
  maxValueInRange += 6 * range;
  range++;
}

console.log(range);
