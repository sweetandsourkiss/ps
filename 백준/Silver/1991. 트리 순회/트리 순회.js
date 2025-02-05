const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

/**
 * @author sweetandsourkiss
 * @name boj 1991
 * @description 2025.02.05
 */

class Node {
  me;
  left;
  right;

  constructor(me) {
    this.me = me;
  }

  setLeft(left) {
    this.left = left;
  }

  setRight(right) {
    this.right = right;
  }
}

const size = parseInt(input[0]);

const nodes = Array(size).fill(null);

const nodeA = new Node("A");
nodes[0] = nodeA;

for (let i = 1; i <= size; i++) {
  const [me, left, right] = input[i].trim().split(" ");
  nodes[me.charCodeAt(0) - 65].setLeft(left);
  nodes[me.charCodeAt(0) - 65].setRight(right);
  if (left !== ".") nodes[left.charCodeAt(0) - 65] = new Node(left);
  if (right !== ".") nodes[right.charCodeAt(0) - 65] = new Node(right);
}

const frontArray = [];
const middleArray = [];
const backArray = [];

const front = (index) => {
  const now = nodes[index];
  frontArray.push(now.me);
  if (now.left !== ".") {
    front(now.left.charCodeAt(0) - 65);
  }
  if (now.right !== ".") {
    front(now.right.charCodeAt(0) - 65);
  }
};

const middle = (index) => {
  const now = nodes[index];
  if (now.left !== ".") {
    middle(now.left.charCodeAt(0) - 65);
  }
  middleArray.push(now.me);
  if (now.right !== ".") {
    middle(now.right.charCodeAt(0) - 65);
  }
};

const back = (index) => {
  const now = nodes[index];
  if (now.left !== ".") {
    back(now.left.charCodeAt(0) - 65);
  }
  if (now.right !== ".") {
    back(now.right.charCodeAt(0) - 65);
  }
  backArray.push(now.me);
};

front(0);
middle(0);
back(0);

console.log(frontArray.join(""));
console.log(middleArray.join(""));
console.log(backArray.join(""));
