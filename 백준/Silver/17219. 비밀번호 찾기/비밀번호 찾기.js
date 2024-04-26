const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [address_number, answer_number] = input[0].split(" ").map(Number);
let index = 1;
const address = {};
for (let address_index = 0; address_index < address_number; address_index++) {
  const [add, password] = input[index++].split(" ");
  address[add] = password;
}
let answer = [];
for (let answer_index = 0; answer_index < answer_number; answer_index++) {
  answer.push(address[input[index++]]);
}
console.log(answer.join("\n"));
