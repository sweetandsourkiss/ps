const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const cal_number = +input[0];
const cals = input.slice(1, 1 + cal_number).map(Number);

let answer = [];
class MaxHeap {
  constructor() {
    this.tree = [];
  }

  top_down() {
    let index = 0;
    while (true) {
      let big_child;
      let right_child = index * 2 + 2;
      if (right_child < this.tree.length) {
        big_child =
          this.tree[right_child] > this.tree[right_child - 1]
            ? right_child
            : right_child - 1;
      } else if (right_child - 1 < this.tree.length) {
        big_child = right_child - 1;
      } else {
        break;
      }

      if (this.tree[index] < this.tree[big_child]) {
        this.swap(index, big_child);
        index = big_child;
      } else {
        break;
      }
    }
  }

  bottom_up() {
    let index = this.tree.length - 1;
    while (index > 0) {
      const parent = index % 2 === 0 ? (index >> 1) - 1 : index >> 1;
      if (this.tree[index] > this.tree[parent]) {
        this.swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }
  }

  swap(candi1, candi2) {
    [this.tree[candi1], this.tree[candi2]] = [
      this.tree[candi2],
      this.tree[candi1],
    ];
  }

  push(x) {
    this.tree.push(x);
    this.bottom_up();
  }

  pop() {
    if (this.isEmpty()) {
      answer.push(0);
    } else {
      answer.push(this.tree[0]);
      if (this.tree.length === 1) {
        this.tree.pop();
      } else {
        this.tree[0] = this.tree.pop();
        this.top_down();
      }
    }
  }

  isEmpty() {
    return this.tree.length === 0;
  }
}
const heap = new MaxHeap();
for (let c = 0; c < cals.length; c++) {
  if (cals[c] === 0) {
    heap.pop();
  } else {
    heap.push(cals[c]);
  }
}

console.log(answer.join("\n"));
