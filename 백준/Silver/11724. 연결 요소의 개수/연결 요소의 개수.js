const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [node_number, line_number] = input[0].split(" ").map(Number);
const graph = Array.from({ length: node_number + 1 }, () =>
  Array(node_number + 1).fill(false)
);
let index = 1;
for (let line_index = 0; line_index < line_number; line_index++) {
  const [a, b] = input[index++].split(" ").map(Number);
  graph[a][b] = true;
  graph[b][a] = true;
}

const visited = Array(node_number + 1).fill(false);
let node_index = 1;
let answer = 0;

while (node_index <= node_number) {
  if (!visited[node_index]) {
    const queue = [];
    queue.push(node_index);
    visited[1] = true;
    let queue_index = 0;
    while (queue_index < queue.length) {
      const now_node = queue[queue_index++];
      for (let n = 1; n <= node_number; n++) {
        if (graph[now_node][n] && !visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      }
    }
    answer++;
  }
  node_index++;
}

console.log(answer);
