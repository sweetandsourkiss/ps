const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const numberOfInteger = parseInt(input[0]);
const integers = input
  .slice(1)
  .filter((v) => v !== "")
  .map((v) => parseInt(v));

const arrayFromN4000ToP4000 = Array(8001).fill(0);

let sumOfIntegers = 0;
integers.forEach((_integer) => {
  sumOfIntegers += _integer;
  arrayFromN4000ToP4000[_integer + 4000]++;
});

let middleValue = -4001,
  modeCount = 0,
  modeValue = 0,
  modeFlag = false,
  integerCount = 0,
  minValue = Number.NEGATIVE_INFINITY,
  maxValue = Number.POSITIVE_INFINITY;
arrayFromN4000ToP4000.forEach((_numberOfInteger, _indexOfInteger) => {
  if (_numberOfInteger > 0) {
    integerCount += _numberOfInteger;

    if (middleValue === -4001 && integerCount >= (numberOfInteger + 1) / 2) {
      middleValue = _indexOfInteger - 4000;
    }
    if (_numberOfInteger > modeCount) {
      modeCount = _numberOfInteger;
      modeValue = _indexOfInteger - 4000;
      modeFlag = false;
    } else if (_numberOfInteger === modeCount && !modeFlag) {
      modeValue = _indexOfInteger - 4000;
      modeFlag = true;
    }

    if (minValue === Number.NEGATIVE_INFINITY) {
      minValue = _indexOfInteger - 4000;
    }
    maxValue = _indexOfInteger - 4000;
  }
});

let average = Math.round(sumOfIntegers / numberOfInteger);
average = average === -0 ? 0 : average;
console.log(average);
console.log(middleValue);
console.log(modeValue);
console.log(maxValue - minValue);
