const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// code your codes
const caseInfos = input.slice(1).filter((v) => v.length);

caseInfos.forEach((v) => {
  const [times, chars] = v
    .split(" ")
    .map((v, index) => (index === 0 ? parseInt(v) : v));

  let result = "";

  chars.split("").forEach((v) => {
    result += v.repeat(times);
  });

  console.log(result);
});
