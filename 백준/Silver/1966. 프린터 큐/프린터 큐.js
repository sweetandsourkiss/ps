const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const caseNumber = parseInt(input[0]);

for (let caseIndex = 0; caseIndex < caseNumber; caseIndex++) {
  const priorityMap = new Map();
  const [docuNumber, targetIndex] = input[caseIndex * 2 + 1]
    .split(" ")
    .map((v) => parseInt(v));

  const documents = input[caseIndex * 2 + 2].split(" ").map((v, index) => {
    priorityMap.has(v)
      ? priorityMap.set(v, priorityMap.get(v) + 1)
      : priorityMap.set(v, 1);
    return [v, index];
  });

  const findPriorityInfo = (initial) => {
    for (let priority = initial; priority > 0; priority--) {
      if (priorityMap.has(`${priority}`)) {
        return [priority, priorityMap.get(`${priority}`)];
      }
    }
    return [-1, -1];
  };

  let [nowPriority, nowPriorityCount] = findPriorityInfo(9);
  let printCount = 0;
  while (true) {
    const _front = documents[0];
    if (parseInt(_front[0]) < nowPriority) {
      documents.push(documents.shift());
    } else if (parseInt(_front[0]) == nowPriority) {
      documents.shift();
      printCount++;
      nowPriorityCount--;
      if (_front[1] === targetIndex) {
        break;
      }

      if (nowPriorityCount === 0)
        [([nowPriority, nowPriorityCount] = findPriorityInfo(nowPriority - 1))];
    }
  }
  console.log(printCount);
}
