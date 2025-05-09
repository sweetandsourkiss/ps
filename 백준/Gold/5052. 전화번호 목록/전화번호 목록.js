class TrieNode {
    constructor() {
        this.children = {}; // 자식 노드들
        this.isEnd = false; // 이 노드에서 번호가 끝나는지 표시
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(number) {
        let node = this.root;
        for (let digit of number) {
            // 만약 이미 끝나는 번호를 지나가면, 접두어가 존재
            if (node.isEnd) return false;
            if (!node.children[digit]) {
                node.children[digit] = new TrieNode();
            }
            node = node.children[digit];
        }
        // 이미 이 번호 이후로 다른 번호가 있으면, 이 번호가 접두어임
        if (Object.keys(node.children).length > 0) return false;
        node.isEnd = true;
        return true;
    }
}

// 입력 처리 예시 (Node.js 환경)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let idx = 0;
const T = Number(input[idx++]);
for (let t = 0; t < T; t++) {
    const n = Number(input[idx++]);
    const numbers = [];
    for (let i = 0; i < n; i++) numbers.push(input[idx++]);
    // 사전순 정렬 (접두어가 먼저 나오도록)
    numbers.sort();

    const trie = new Trie();
    let consistent = true;
    for (let number of numbers) {
        if (!trie.insert(number)) {
            consistent = false;
            break;
        }
    }
    console.log(consistent ? "YES" : "NO");
}
