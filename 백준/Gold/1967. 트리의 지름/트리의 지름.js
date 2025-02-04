const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1967
 * @description 2025.02.04
 */

const size = parseInt(input[0]);

const graph = Array.from({ length: size + 1 }, () => []);

for (let i = 1; i < size; i++) {
  const [str, end, dist] = input[i].split(" ").map(Number);
  graph[str].push([end, dist]);
  graph[end].push([str, dist]);
}

let maxNode = -1;
let max = -1;

const find = (nowNode, dist, visited) => {
  visited[nowNode] = true;
  const nextNodes = graph[nowNode].filter((v) => !visited[v[0]]);
  if (nextNodes.length > 0) {
    nextNodes.forEach((v) => {
      const [nextNode, nextDist] = v;
      find(nextNode, dist + nextDist, visited);
    });
  } else {
    if (max < dist) {
      maxNode = nowNode;
      max = dist;
    }
  }
};

find(1, 0, Array(size + 1).fill(false));
find(maxNode, 0, [maxNode], Array(size + 1).fill(false));

console.log(max);
