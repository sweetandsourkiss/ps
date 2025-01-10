const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1238
 * @description 2025.01.10
 */

const [N, M, X] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const reverseGraph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [start, end, time] = input[i].split(" ").map(Number);
  graph[start].push([end, time]);
  reverseGraph[end].push([start, time]);
}

function dijkstra(start, graph) {
  const dist = Array(N + 1).fill(Infinity);
  const pq = [[0, start]];
  dist[start] = 0;

  while (pq.length > 0) {
    const [curDist, cur] = pq.shift();

    if (dist[cur] < curDist) continue;

    for (const [next, nextDist] of graph[cur]) {
      const cost = curDist + nextDist;
      if (cost < dist[next]) {
        dist[next] = cost;
        pq.push([cost, next]);
      }
    }
    pq.sort((a, b) => a[0] - b[0]);
  }
  return dist;
}

const toParty = dijkstra(X, reverseGraph);
const fromParty = dijkstra(X, graph);

let maxTime = 0;
for (let i = 1; i <= N; i++) {
  maxTime = Math.max(maxTime, toParty[i] + fromParty[i]);
}

console.log(maxTime);
