const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1504
 * @description 2025.01.12
 */

const [N, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let index = 1; index <= E; index++) {
  const [a, b, dist] = input[index].split(" ").map(Number);
  graph[a][b] = dist;
  graph[b][a] = dist;
}

const [v1, v2] = input[E + 1].split(" ").map(Number);

const dijkstra = (start) => {
  // return distance array
  const dist = Array(N + 1).fill(Infinity);
  const visited = Array(N + 1).fill(false);
  dist[start] = 0;

  for (let i = 1; i <= N; i++) {
    let min = Infinity;
    let minIndex = -1;

    for (let j = 1; j <= N; j++) {
      if (!visited[j] && dist[j] < min) {
        min = dist[j];
        minIndex = j;
      }
    }

    if (minIndex === -1) break;
    visited[minIndex] = true;

    for (let j = 1; j <= N; j++) {
      if (!visited[j] && graph[minIndex][j] !== Infinity) {
        dist[j] = Math.min(dist[j], dist[minIndex] + graph[minIndex][j]);
      }
    }
  }

  return dist;
};

// 1 -> v1 -> v2 -> N
// 1 -> v2 -> v1 -> N

const v1_dist = dijkstra(v1);
const v2_dist = dijkstra(v2);

let result = Infinity;

if (v1_dist[1] !== Infinity && v1_dist[v2] !== Infinity && v2_dist[N] !== Infinity) {
  result = v1_dist[1] + v1_dist[v2] + v2_dist[N];
}

if (v2_dist[1] !== Infinity && v2_dist[v1] !== Infinity && v1_dist[N] !== Infinity) {
  result = Math.min(result, v2_dist[1] + v2_dist[v1] + v1_dist[N]);
}

if (result === Infinity) {
  console.log(-1);
} else {
  console.log(result);
}
