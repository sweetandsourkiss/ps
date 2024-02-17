const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here

let N = parseInt(input[0]);
let power;
let index = 1;
while (true) {
  let tmp = Math.pow(3, index);
  if (tmp == N) {
    power = index;
    break;
  }
  index++;
}

map = Array.from({ length: N }, () => Array(N).fill("*"));

recur(0, 0, N / 3);

let answer = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer += map[i][j];
  }
  answer += "\n";
}

console.log(answer);

function recur(startR, startC, chunk) {
  if (chunk >= 3) {
    let count = 1;
    for (let chunkR = startR; chunkR < startR + chunk * 3; chunkR += chunk) {
      for (let chunkC = startC; chunkC < startC + chunk * 3; chunkC += chunk) {
        if (count == 5) {
          for (let blankR = chunkR; blankR < chunkR + chunk; blankR++) {
            for (let blankC = chunkC; blankC < chunkC + chunk; blankC++) {
              map[blankR][blankC] = " ";
            }
          }
        } else {
          recur(chunkR, chunkC, chunk / 3);
        }
        count++;
      }
    }
  } else {
    for (let row = startR; row < startR + 3; row++) {
      for (let col = startC; col < startC + 3; col++) {
        if (row % 3 == 1 && col % 3 == 1) {
          map[row][col] = " ";
        }
      }
    }
  }
}
