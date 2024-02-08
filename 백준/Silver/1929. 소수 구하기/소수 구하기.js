const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [from, to] = input[0].split(" ").map((v) => parseInt(v));
const positiveIntegers = Array.from({ length: to + 1 }, () => true);

for (let i = 2; i <= Math.floor(Math.sqrt(to)); i++) {
  if (positiveIntegers[i]) {
    for (let j = i * 2; j <= to; j += i) {
      positiveIntegers[j] = false;
    }
  }
}

positiveIntegers[0] = false;
positiveIntegers[1] = false;

for (let index = 2; index < from; index++) {
  positiveIntegers[index] = false;
}

// let answer = "";
const primes = [];

for (let index = from; index <= to; index++) {
  if (positiveIntegers[index]) {
    primes.push(index);
    // answer += `${index}\n`;
  }
}

console.log(primes.join("\n"));
// console.log(answer);
