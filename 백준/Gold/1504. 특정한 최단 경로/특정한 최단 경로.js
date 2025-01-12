const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1504
 * @description 2025.01.12
 */

const [N, E] = input[0].split(" ").map(Number);
const adjList = Array.from({ length: N + 1 }, () => []);

for (let index = 1; index <= E; index++) {
  const [a, b, dist] = input[index].split(" ").map(Number);
  adjList[a].push([b, dist]);
  adjList[b].push([a, dist]);
}

const [v1, v2] = input[E + 1].split(" ").map(Number);

// 1 -> v1 -> v2 -> N
// 1 -> v2 -> v1 -> N

const dijkstra = (start) => {
  // return distance array
  const dist = Array(N + 1).fill(Infinity);
  const pq = [[0, start]];
  dist[start] = 0;
  while (pq.length > 0) {
    const [cur_dist, now] = pq.shift();
    if (dist[now] < cur_dist) continue;

    for (const [next, next_dist] of adjList[now]) {
      if (next === 0 || next === now) continue;
      const cost = cur_dist + next_dist;
      if (cost < dist[next]) {
        dist[next] = cost;
        pq.push([cost, next]);
      }
    }

    pq.sort((a, b) => a[0] - b[0]);
  }

  return dist;
};

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
