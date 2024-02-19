const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [numberOfCards, jackNumber] = input[0].split(" ").map((v) => parseInt(v));
const cards = input[1].split(" ").map((v) => parseInt(v));

let answer = 0;

for (
  let firstCardIndex = 0;
  firstCardIndex < numberOfCards - 2;
  firstCardIndex++
) {
  for (
    let secondCardIndex = firstCardIndex + 1;
    secondCardIndex < numberOfCards - 1;
    secondCardIndex++
  ) {
    for (
      let thirdCardIndex = secondCardIndex + 1;
      thirdCardIndex < numberOfCards;
      thirdCardIndex++
    ) {
      if (answer === jackNumber) {
        console.log(jackNumber);
        return;
      }
      const tmpSum =
        cards[firstCardIndex] + cards[secondCardIndex] + cards[thirdCardIndex];
      if (tmpSum <= jackNumber && tmpSum > answer) {
        answer = tmpSum;
      }
    }
  }
}
console.log(answer);
