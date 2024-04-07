const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const test_number = +input[0];
let index = 1;
let answer = [];

for (let t = 0; t < test_number; t++) {
  const clothes_number = +input[index++];
  const clothes = {};
  for (let c = 0; c < clothes_number; c++) {
    const [name, place] = input[index++].trim().split(" ");
    clothes[place] = (clothes[place] ?? 0) + 1;
  }

  const clothes_array = Array.from(Object.entries(clothes));

  let count = 1;
  for (let c = 0; c < clothes_array.length; c++) {
    count *= clothes_array[c][1] + 1;
  }

  answer.push(count - 1);
}

console.log(answer.join("\n"));
