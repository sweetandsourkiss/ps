const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 9250
 * @description 2025.05.09
 */

// Trie Node 정의
class TrieNode {
  constructor() {
    this.children = {};
    this.fail = null;
    this.end = false;
  }
}

// Trie + Aho-Corasick
class AhoCorasick {
  constructor() {
    this.root = new TrieNode();
  }

  insert(text) {
    let node = this.root;
    for (const ch of text) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.end = true;
  }

  buildFailLinks() {
    const queue = [];
    this.root.fail = this.root;
    for (const ch in this.root.children) {
      this.root.children[ch].fail = this.root;
      queue.push(this.root.children[ch]);
    }

    while (queue.length) {
      const current = queue.shift();

      for (const ch in current.children) {
        let failNode = current.fail;

        while (failNode !== this.root && !failNode.children[ch]) {
          failNode = failNode.fail;
        }

        if (failNode.children[ch] && failNode.children[ch] !== current.children[ch]) {
          current.children[ch].fail = failNode.children[ch];
        } else {
          current.children[ch].fail = this.root;
        }
        current.children[ch].end = current.children[ch].end || current.children[ch].fail.end;
        queue.push(current.children[ch]);
      }
    }
  }

  search(text) {
    let node = this.root;
    for (const ch of text) {
      while (node !== this.root && !node.children[ch]) {
        node = node.fail;
      }
      if (node.children[ch]) node = node.children[ch];
      if (node.end) return true;
    }
    return false;
  }
}

let idx = 0;
const N = +input[idx++];
const S = [];
for (let i = 0; i < N; i++) S.push(input[idx++]);
const Q = +input[idx++];
const queries = [];
for (let i = 0; i < Q; i++) queries.push(input[idx++]);

// 아호코라식 빌드
const ac = new AhoCorasick();
for (const s of S) ac.insert(s);
ac.buildFailLinks();
// 판별 및 출력
let result = "";
for (const query of queries) {
  result += (ac.search(query) ? "YES" : "NO") + "\n";
}
process.stdout.write(result);
