const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const case_number = Number(input[0]);
let max_case_number = 0;
const cases = input
  .slice(1)
  .filter((v) => v)
  .map(Number);
cases.forEach((value) => {
  max_case_number = Math.max(max_case_number, value);
});
const fibonacci_dp_array = Array.from({ length: max_case_number + 1 }, () =>
  Array(2).fill(0)
);
fibonacci_dp_array[0][0] = 1;
fibonacci_dp_array[0][1] = 0;
if (max_case_number > 0) {
  fibonacci_dp_array[1][0] = 0;
  fibonacci_dp_array[1][1] = 1;
}

for (let number = 2; number <= max_case_number; number++) {
  fibonacci_dp_array[number][0] =
    fibonacci_dp_array[number - 1][0] + fibonacci_dp_array[number - 2][0];
  fibonacci_dp_array[number][1] =
    fibonacci_dp_array[number - 1][1] + fibonacci_dp_array[number - 2][1];
}

let answer = "";
cases.forEach(
  (value) =>
    (answer += `${fibonacci_dp_array[value][0]} ${fibonacci_dp_array[value][1]}\n`)
);
console.log(answer);