const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [user_number, connect_number] = input[0].split(" ").map(Number);
const graph = Array.from({ length: user_number + 1 }, () =>
  Array(user_number + 1).fill(false)
);

const lines = input
  .slice(1)
  .filter((v) => v)
  .map((v) => v.split(" ").map(Number));
for (const line of lines) {
  graph[line[0]][line[1]] = graph[line[1]][line[0]] = true;
}

const kevinGraph = Array.from({ length: user_number + 1 }, () =>
  Array(user_number + 1).fill(101)
);

const bfs = (now_user) => {
  let visited = Array(user_number + 1).fill(false);
  visited[now_user] = true;
  const queue = [[now_user, 0]];
  while (queue.length > 0) {
    const [user, depth] = queue.shift();
    kevinGraph[user][now_user] = kevinGraph[now_user][user] = Math.min(
      kevinGraph[user][now_user],
      depth
    );

    for (let _user = 1; _user <= user_number; _user++) {
      if (!visited[_user] && graph[user][_user]) {
        visited[_user] = true;
        queue.push([_user, depth + 1]);
      }
    }
  }
};

for (let user = 1; user <= user_number; user++) {
  bfs(user);
}

let answer = 101;
let kevin_bacon = Number.POSITIVE_INFINITY;
for (let user = user_number; user >= 1; user--) {
  const bacon = kevinGraph[user].reduce((prev, cur) => prev + cur, 0);
  if (bacon <= kevin_bacon) {
    answer = user;
    kevin_bacon = bacon;
  }
}
console.log(answer);
