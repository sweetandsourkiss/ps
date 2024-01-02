const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const word = input[0].toUpperCase()
const spells = word.split("")
const spellCount = Array(26).fill(0)
spells.forEach((v) => spellCount[v.charCodeAt(0) - 'A'.charCodeAt(0)]++)

let maxCount = 0
let maxSpell = ''
let existSameCount = false
spellCount.forEach((v, index) => {
    if (maxCount < v) {
        maxCount = v
        maxSpell = String.fromCharCode(65 + index)
        existSameCount = false
    } else if (maxCount == v) {
        existSameCount = true
    }
})

if (existSameCount)
    console.log("?")
else
    console.log(maxSpell)
