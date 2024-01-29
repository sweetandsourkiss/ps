const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const randomWord = input[0];
const indexOfWord = parseInt(input[1] - 1);

console.log(randomWord.charAt(indexOfWord));
