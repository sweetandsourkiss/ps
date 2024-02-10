const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfIntegers = parseInt(input[0]);
const integers = input[1].split(" ").map((v) => parseInt(v));
const primes = Array(1001).fill(true);

primes[0] = primes[1] = false;

for (let integer = 2; integer <= Math.floor(Math.sqrt(1000)); integer++) {
  if (primes[integer]) {
    for (let notPrime = integer * 2; notPrime <= 1000; notPrime += integer) {
      primes[notPrime] = false;
    }
  }
}
let answer = 0;
for (let integerIndex = 0; integerIndex < numberOfIntegers; integerIndex++) {
  if (primes[integers[integerIndex]]) {
    answer++;
  }
}

console.log(answer);
