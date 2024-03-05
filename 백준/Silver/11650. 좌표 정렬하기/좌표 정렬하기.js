const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfCoordinate = Number(input[0]);
let coordinates = input
  .slice(1, 1 + numberOfCoordinate)
  .map((v) => v?.split(" ").map(Number));
coordinates = coordinates
  .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  .map((v) => v.join(" "));

console.log(coordinates.join("\n"));