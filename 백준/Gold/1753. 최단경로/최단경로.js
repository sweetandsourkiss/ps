const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1753
 * @description 2025.01.14
 */

const [V, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: V + 1 }, () => []);

const start = parseInt(input[1]);

for (let index = 2; index < 2 + E; index++) {
  const [from, to, dist] = input[index].split(" ").map(Number);

  graph[from].push([to, dist]);
}

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

const dijkstra = (start) => {
  const distances = Array(V + 1).fill(Infinity);
  const pq = new MinHeap();

  distances[start] = 0;
  pq.insert([start, 0]);

  while (!pq.isEmpty()) {
    const [currentNode, currentDist] = pq.extractMin();
    if (currentDist > distances[currentNode]) continue;

    graph[currentNode].forEach(([nextNode, weight]) => {
      const distance = currentDist + weight;
      if (distance < distances[nextNode]) {
        distances[nextNode] = distance;
        pq.insert([nextNode, distance]);
      }
    });
  }

  return distances;
};
const distances = dijkstra(start);

let result = "";
for (let i = 1; i <= V; i++) {
  result += (distances[i] === Infinity ? "INF" : distances[i]) + "\n";
}

console.log(result);
