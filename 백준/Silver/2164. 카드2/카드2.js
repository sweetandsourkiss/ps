const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfCards = parseInt(input[0]);
let cards = Array.from({ length: numberOfCards }, (__, index) => index + 1);
let isDiscardTurn = true;

while (cards.length > 2) {
  if (cards.length % 2 === 0) {
    cards = cards.filter((__, index) => index % 2 === (isDiscardTurn ? 1 : 0));
  } else {
    cards = cards.filter((__, index) => index % 2 === (isDiscardTurn ? 1 : 0));
    isDiscardTurn = !isDiscardTurn;
  }
}

console.log(
  cards.length === 2 ? (isDiscardTurn ? cards[1] : cards[0]) : cards[0]
);
