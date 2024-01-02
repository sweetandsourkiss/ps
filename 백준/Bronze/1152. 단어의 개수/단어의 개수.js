const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const words = input[0].split(" ").filter(v => v.length)

console.log(words.length)