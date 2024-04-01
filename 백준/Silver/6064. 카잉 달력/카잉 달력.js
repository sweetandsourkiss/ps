const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");

// your own code here
const test_number = +input[0];
let answer = "";
for (let test = 0; test < test_number; test++) {
  const [M, N, M_goal, N_goal] = input[test + 1].split(" ").map(Number);
  let max = Math.max(M, N);
  let min = Math.min(M, N);
  let GCD;
  while (true) {
    if (max % min === 0) {
      GCD = min;
      break;
    } else {
      const diff = max - min;
      max = Math.max(min, diff);
      min = Math.min(min, diff);
    }
  }
  const LCM = GCD * (M / GCD) * (N / GCD);
  let test_answer = -1;
  if (M >= N) {
    for (let year = M_goal - 1; year < LCM; year += M) {
      if ((year % N) + 1 === N_goal) {
        test_answer = year + 1;
        break;
      }
    }
  } else {
    for (let year = N_goal - 1; year < LCM; year += N) {
      if ((year % M) + 1 === M_goal) {
        test_answer = year + 1;
        break;
      }
    }
  }
  answer += test_answer + "\n";
}

console.log(answer);
