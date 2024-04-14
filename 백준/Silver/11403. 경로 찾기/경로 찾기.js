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

let answer = "";
const find_way = (start, end) => {
  const queue = [start];
  const visited = Array(size).fill(false);
  let flag = false;
  while (queue.length > 0) {
    const now = queue.shift();
    for (let c = 0; c < size; c++) {
      if (adj_array[now][c] === 1 && !visited[c]) {
        if (c === end) {
          flag = true;
          break;
        } else {
          visited[c] = true;
          queue.push(c);
        }
      }
    }
  }

  if (flag) {
    answer += "1 ";
  } else {
    answer += "0 ";
  }
};

for (let r = 0; r < size; r++) {
  for (let c = 0; c < size; c++) {
    find_way(r, c);
  }
  answer += "\n";
}

console.log(answer);
