const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const holdCardNumber = Number(input[0]);
const holdCards = input[1].split(" ").map(Number);
const suggestCardNumber = Number(input[2]);
const suggestCards = input[3].split(" ").map(Number);

const map = new Map();
for (card of holdCards) {
  const cardNumber = map.get(card);
  if (cardNumber === undefined) {
    map.set(card, 1);
  } else {
    map.set(card, cardNumber + 1);
  }
}

let answer = [];
for (card of suggestCards) {
  answer.push(map.get(card) ?? 0);
}

console.log(answer.join(" "));
