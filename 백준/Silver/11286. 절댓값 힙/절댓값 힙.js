const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const cal_number = +input[0];
const cals = input.slice(1, cal_number + 1).map(Number);
const answer = [];

class AbsoluteHeap {
  constructor() {
    this.heap = [];
  }

  top_down() {
    let index = 0;
    while (true) {
      let smaller_child;
      let right_child = index * 2 + 2;
      if (right_child < this.length()) {
        smaller_child =
          Math.abs(this.heap[right_child]) <
          Math.abs(this.heap[right_child - 1])
            ? right_child
            : Math.abs(this.heap[right_child]) ===
                Math.abs(this.heap[right_child - 1]) &&
              this.heap[right_child] <= this.heap[right_child - 1]
            ? right_child
            : right_child - 1;
      } else if (right_child - 1 < this.length()) {
        smaller_child = right_child - 1;
      } else {
        break;
      }

      if (
        Math.abs(this.heap[smaller_child]) < Math.abs(this.heap[index]) ||
        (Math.abs(this.heap[smaller_child]) === Math.abs(this.heap[index]) &&
          this.heap[smaller_child] < this.heap[index])
      ) {
        this.swap(index, smaller_child);
        index = smaller_child;
      } else {
        break;
      }
    }
  }

  bottom_up() {
    let index = this.length() - 1;
    while (index > 0) {
      const parent = index % 2 === 0 ? (index >> 1) - 1 : index >> 1;
      if (
        Math.abs(this.heap[parent]) > Math.abs(this.heap[index]) ||
        (Math.abs(this.heap[parent]) === Math.abs(this.heap[index]) &&
          this.heap[parent] > this.heap[index])
      ) {
        this.swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }
  }

  push(x) {
    this.heap.push(x);
    this.bottom_up();
  }

  shift() {
    if (this.is_empty()) {
      answer.push(0);
    } else if (this.length() === 1) {
      answer.push(this.heap.pop());
    } else {
      answer.push(this.heap[0]);
      this.heap[0] = this.heap.pop();
      this.top_down();
    }
  }

  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }

  length() {
    return this.heap.length;
  }

  is_empty() {
    return this.length() === 0;
  }
}

const absolute_heap = new AbsoluteHeap();

for (let c = 0; c < cal_number; c++) {
  if (cals[c] === 0) {
    absolute_heap.shift();
  } else {
    absolute_heap.push(cals[c]);
  }
}

console.log(answer.join("\n"));
