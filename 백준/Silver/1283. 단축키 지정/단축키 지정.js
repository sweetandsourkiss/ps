const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1283
 * @description 2025.01.11
 */

const optionNumber = parseInt(input[0]);
const set = new Set();

for (let index = 1; index <= optionNumber; index++) {
  const optionName = input[index];
  const isFirstChar = Array(optionName.length).fill(false);
  const optionNameWithIndex = input[index]
    .split("")
    .map((v, i) => {
      if (optionName[i - 1] === " " || i === 0) {
        isFirstChar[i] = true;
      }
      return v;
    })
    .map((v, i) => [v, i])
    .filter((v) => v[0] !== " ");
  // console.log(isFirstChar);
  optionNameWithIndex.sort((a, b) => {
    if (isFirstChar[a[1]] && isFirstChar[b[1]]) return a[1] - b[1];
    else if (isFirstChar[a[1]]) return -1;
    else if (isFirstChar[b[1]]) return 1;
    return a[1] - b[1];
  });
  // console.log(optionNameWithIndex);
  let shortcutIndex = -1;
  for (let i = 0; i < optionNameWithIndex.length; i++) {
    if (!set.has(optionNameWithIndex[i][0].toLowerCase())) {
      set.add(optionNameWithIndex[i][0].toLowerCase());
      shortcutIndex = optionNameWithIndex[i][1];
      break;
    }
  }
  if (shortcutIndex >= 0) {
    console.log(
      optionName.substring(0, shortcutIndex) +
        "[" +
        optionName[shortcutIndex] +
        "]" +
        optionName.substring(shortcutIndex + 1, optionName.length)
    );
  } else {
    console.log(optionName);
  }
}
