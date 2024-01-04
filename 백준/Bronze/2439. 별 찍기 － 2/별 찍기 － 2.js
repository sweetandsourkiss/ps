const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const lineLength = parseInt(input[0])

let answer = ""

for (let i = 1; i <= lineLength; i++) {
    answer += " ".repeat(lineLength - i) + "*".repeat(i) + "\n"
}

console.log(answer)