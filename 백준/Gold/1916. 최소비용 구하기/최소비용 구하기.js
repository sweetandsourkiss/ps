const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1916
 * @description 2025.01.16
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element[1] >= parent[1]) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild[1] < element[1]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if ((swap === null && rightChild[1] < element[1]) || (swap !== null && rightChild[1] < leftChild[1])) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const N = Number(input[0]);
const M = Number(input[1]);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i < 2 + M; i++) {
  const [str, end, dist] = input[i].split(" ").map(Number);
  graph[str].push([end, dist]);
}

const [start, end] = input[M + 2].split(" ").map(Number);

// console.log(N, M);
// console.log(graph);
// console.log(start, end);

const dijkstra = (start) => {
  const dist = Array(N + 1).fill(Infinity);
  const pq = new MinHeap();
  pq.insert([start, 0]);

  while (!pq.isEmpty()) {
    const [cur, curDist] = pq.extractMin();
    if (dist[cur] < curDist) continue;

    for (const [next, nextDist] of graph[cur]) {
      const sum = curDist + nextDist;
      if (sum < dist[next]) {
        dist[next] = sum;
        pq.insert([next, sum]);
      }
    }
  }
  return dist;
};

const distance = dijkstra(start);

console.log(distance[end]);
