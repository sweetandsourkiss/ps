const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1167
 * @description 2025.01.09
 */

const V = parseInt(input[0]);
const tree = Array.from({ length: V + 1 }, () => []);
let maxDist = 0;
let maxNode = 0;

// 트리 구성
for (let i = 1; i <= V; i++) {
  const [node, ...connections] = input[i].split(" ").map(Number);
  for (let j = 0; j < connections.length - 1; j += 2) {
    tree[node].push([connections[j], connections[j + 1]]);
  }
}
// console.log(tree);

function dfs(node, dist, visited) {
  visited[node] = true;

  if (dist > maxDist) {
    maxDist = dist;
    maxNode = node;
  }

  for (const [nextNode, weight] of tree[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode, dist + weight, visited);
    }
  }
}

// 첫 번째 DFS: 임의의 노드에서 가장 먼 노드 찾기
dfs(1, 0, Array(V + 1).fill(false));

// 두 번째 DFS: 가장 먼 노드에서 다시 가장 먼 노드 찾기
maxDist = 0;
dfs(maxNode, 0, Array(V + 1).fill(false));

console.log(maxDist);
