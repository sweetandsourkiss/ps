const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const graph = new Map();
const [node_number, line_number, start_number] = input[0]
  .split(" ")
  .map(Number);
const nodes = input
  .slice(1)
  .filter((v) => v)
  .map((v) => v.split(" ").map(Number));

for (let line = 0; line < line_number; line++) {
  const [node_a, node_b] = nodes[line];
  if (graph.has(node_a)) {
    graph.set(node_a, graph.get(node_a).concat(node_b));
  } else {
    graph.set(node_a, [node_b]);
  }
  if (graph.has(node_b)) {
    graph.set(node_b, graph.get(node_b).concat(node_a));
  } else {
    graph.set(node_b, [node_a]);
  }
}

for (let _node = 1; _node <= node_number; _node++) {
  if (graph.has(_node)) {
    graph.set(
      _node,
      graph.get(_node).sort((a, b) => a - b)
    );
  }
}

let visited = Array(node_number + 1).fill(false);
let answer = "";

answer += start_number;
visited[start_number] = true;
const dfs = (now_node) => {
  const connected_nodes = graph.get(now_node);
  if (connected_nodes !== undefined) {
    for (
      let node_index = 0;
      node_index < connected_nodes.length;
      node_index++
    ) {
      if (!visited[connected_nodes[node_index]]) {
        visited[connected_nodes[node_index]] = true;
        answer += " " + connected_nodes[node_index];
        dfs(connected_nodes[node_index]);
      }
    }
  }
};
dfs(start_number);

answer += "\n";

visited = Array(node_number + 1).fill(false);
const bfs = (start_node) => {
  const queue = [start_node];
  visited[start_node] = true;
  while (queue.length > 0) {
    const _node = queue.shift();
    answer += _node + " ";
    const connected_nodes = graph.get(_node);
    if (connected_nodes !== undefined) {
      for (
        let node_index = 0;
        node_index < connected_nodes.length;
        node_index++
      ) {
        if (!visited[connected_nodes[node_index]]) {
          visited[connected_nodes[node_index]] = true;
          queue.push(connected_nodes[node_index]);
        }
      }
    }
  }
};
bfs(start_number);
console.log(answer);
