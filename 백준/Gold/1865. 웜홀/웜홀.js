const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1753
 * @description 2025.01.15
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

const tc = parseInt(input[0]);
let tcIndex = 0;
let caseIndex = 1;

while (tcIndex < tc) {
  const [N, M, W] = input[caseIndex++].split(" ").map(Number);
  const links = [];

  for (let i = 0; i < M; i++) {
    const [str, end, time] = input[caseIndex++].split(" ").map(Number);
    links.push({ str, end, time });
    links.push({ str: end, end: str, time });
  }

  for (let i = 0; i < W; i++) {
    const [str, end, time] = input[caseIndex++].split(" ").map(Number);
    links.push({ str, end, time: -time });
  }

  //Infinity가 아닌 0으로 초기값을 주었습니다.
  const nodes = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    for (let { str, end, time } of links) {
      if (nodes[str] + time < nodes[end]) {
        nodes[end] = nodes[str] + time;
      }
    }
  }
  let pass = "NO";
  A: for (let i = 1; i <= N; i++) {
    for (let { str, end, time } of links) {
      if (nodes[str] + time < nodes[end]) {
        pass = "YES";
        break A;
      }
    }
  }
  console.log(pass);
  tcIndex++;
}
