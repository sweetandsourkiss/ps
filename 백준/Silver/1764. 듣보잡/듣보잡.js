const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [the_unheard_number, the_unseen_number] = input[0].split(" ").map(Number);
const the_unheard = new Set(input.slice(1, 1 + the_unheard_number));
const the_unseen = input.slice(
  1 + the_unheard_number,
  1 + the_unheard_number + the_unseen_number
);

let answer = [];
for (const name of the_unseen) {
  if (the_unheard.has(name)) {
    answer.push(name);
  }
}
answer.sort((a, b) => (a < b ? -1 : 1));

console.log(answer.length.toString());
console.log(answer.join("\n"));