const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const scale = input[0];

if (scale === "1 2 3 4 5 6 7 8") console.log("ascending");
else if (scale === "8 7 6 5 4 3 2 1") console.log("descending");
else console.log("mixed");
