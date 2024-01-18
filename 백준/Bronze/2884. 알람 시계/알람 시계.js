const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// code your own codes
const [hour, minute] = input[0].split(" ").map((v) => parseInt(v));
let newHour, newMinute;
let flag = false;

if (minute < 45) {
  flag = true;
  newMinute = 60 - (45 - minute);
} else {
  newMinute = minute - 45;
}

if (flag) newHour = hour === 0 ? 23 : hour - 1;
else newHour = hour;

console.log(newHour, newMinute);
