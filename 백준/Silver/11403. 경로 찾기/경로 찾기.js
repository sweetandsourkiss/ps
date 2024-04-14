const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const size = +input[0];
const adj_array = Array.from({ length: size }, () => Array(size));
let index = 1;

for (let r = 0; r < size; r++) {
  adj_array[r] = input[index++].split(" ").map(Number);
}

for (let k = 0; k < size; k++) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (adj_array[r][k] === 1 && adj_array[k][c] === 1) {
        adj_array[r][c] = 1;
      }
    }
  }
}

for (let r = 0; r < size; r++) {
  console.log(adj_array[r].join(" "));
}
