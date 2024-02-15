const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [oneNumber, theOtherNumber] = input[0].split(" ").map((v) => parseInt(v));

let GCD, LCM;

let biggerNumber, smallerNumber;
biggerNumber = Math.max(oneNumber, theOtherNumber);
smallerNumber = Math.min(oneNumber, theOtherNumber);
if (biggerNumber === smallerNumber) {
  console.log(`${biggerNumber}\n${smallerNumber}`);
  return;
}

while (true) {
  const _numberDifference = biggerNumber - smallerNumber;
  if (biggerNumber % _numberDifference === 0) {
    GCD = _numberDifference;
    LCM = GCD * (oneNumber / GCD) * (theOtherNumber / GCD);
    break;
  } else {
    biggerNumber = Math.max(smallerNumber, _numberDifference);
    smallerNumber = Math.min(smallerNumber, _numberDifference);
  }
}

console.log(`${GCD}\n${LCM}`);
