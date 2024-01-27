const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const spells = input[0].split("");
const positions = Array(26).fill(-1);

for (let i = spells.length - 1; i >= 0; i--) {
  const index = spells[i].charCodeAt(0) - "a".charCodeAt(0);
  positions[index] = i;
}

console.log(positions.join(" "));
