const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1043
 * @description 2025.01.07
 */

const [_, numOfParty] = input[0].split(" ").map(Number);
const setOfTruthPeople = new Set(input[1].split(" ").slice(1).map(Number));

const parties = input.slice(2).map((string) => {
  const partyMembers = string.split(" ").map(Number);
  partyMembers.shift();
  return partyMembers;
});

const truthVisited = Array(numOfParty).fill(false);

while (true) {
  let loopFlag = false;
  for (let index = 0; index < numOfParty; index++) {
    if (truthVisited[index]) continue;
    let partyFlag = false;
    for (let i = 0; i < parties[index].length; i++) {
      if (setOfTruthPeople.has(parties[index][i])) {
        partyFlag = true;
        break;
      }
    }
    if (partyFlag) {
      loopFlag = true;
      truthVisited[index] = true;
      for (let i = 0; i < parties[index].length; i++) {
        setOfTruthPeople.add(parties[index][i]);
      }
    }
  }
  if (!loopFlag) break;
}

let result = 0;
for (let index = 0; index < numOfParty; index++) {
  if (!truthVisited[index]) {
    result++;
  }
}

console.log(result);
