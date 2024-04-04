const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const readline = require("readline");
const rl = readline.createInterface({
  input:
    process.platform === "linux" ? process.stdin : fs.createReadStream(path),
  output: process.stdout,
});

// your own code here
let test_number;
let test_command_number = [];
let line_index = 1;
let now_goal = 0;
let answer = [];
let min_heap = [];
let max_heap = [];
let heap_counter = {};

const bottom_up_sort = (heap, is_min_heap) => {
  let now_index = heap.length - 1;
  while (now_index > 0) {
    const parent_index =
      now_index % 2 === 0 ? now_index / 2 - 1 : Math.floor(now_index / 2);
    if (heap[now_index] - heap[parent_index] < 0 === is_min_heap) {
      [heap[now_index], heap[parent_index]] = [
        heap[parent_index],
        heap[now_index],
      ];
      now_index = parent_index;
    } else {
      break;
    }
  }
};

const top_down_sort = (heap, is_min_heap) => {
  let now_index = 0;
  while (true) {
    const left_index = now_index * 2 + 1;
    const right_index = now_index * 2 + 2;
    if (right_index < heap.length) {
      let target_index;
      target_index =
        heap[left_index] - heap[right_index] < 0 === is_min_heap
          ? left_index
          : right_index;
      if (heap[target_index] - heap[now_index] < 0 === is_min_heap) {
        [heap[now_index], heap[target_index]] = [
          heap[target_index],
          heap[now_index],
        ];
        now_index = target_index;
      } else {
        break;
      }
    } else if (left_index < heap.length) {
      if (heap[left_index] - heap[now_index] < 0 === is_min_heap) {
        [heap[now_index], heap[left_index]] = [
          heap[left_index],
          heap[now_index],
        ];
        now_index = left_index;
      } else {
        break;
      }
    } else {
      break;
    }
  }
};

const case_refine = () => {
  while (min_heap.length > 0 && heap_counter[min_heap[0]] === 0) {
    if (min_heap.length === 1) {
      min_heap.pop();
    } else {
      min_heap[0] = min_heap.pop();
      top_down_sort(min_heap, true);
    }
  }

  while (max_heap.length > 0 && heap_counter[max_heap[0]] === 0) {
    if (max_heap.length === 1) {
      max_heap.pop();
    } else {
      max_heap[0] = max_heap.pop();
      top_down_sort(max_heap, false);
    }
  }

  if (max_heap.length === 0 || min_heap.length === 0) {
    answer.push("EMPTY");
  } else {
    answer.push(`${max_heap[0]} ${min_heap[0]}`);
  }
};

rl.on("line", (line) => {
  if (line_index === 1) {
    test_number = Number(line.trim());
    line_index++;
  } else {
    if (line[0] !== "I" && line[0] !== "D") {
      test_command_number.push(Number(line.trim()));
      now_goal = line_index + Number(line.trim());
    } else {
      line_index++;
      const [command, target] = line.split(" ").filter((v) => v);
      switch (command) {
        case "I":
          min_heap.push(target);
          max_heap.push(target);
          bottom_up_sort(min_heap, true);
          bottom_up_sort(max_heap, false);
          heap_counter[target] = (heap_counter[target] ?? 0) + 1;
          break;
        case "D":
          switch (target) {
            case "1":
              while (max_heap.length > 0 && heap_counter[max_heap[0]] === 0) {
                if (max_heap.length === 1) {
                  max_heap.pop();
                } else {
                  max_heap[0] = max_heap.pop();
                  top_down_sort(max_heap, false);
                }
              }
              if (max_heap.length > 0) {
                heap_counter[max_heap[0]] = heap_counter[max_heap[0]] - 1;
                if (max_heap.length === 1) {
                  max_heap.pop();
                } else {
                  max_heap[0] = max_heap.pop();
                  top_down_sort(max_heap, false);
                }
              }
              break;
            case "-1":
              while (min_heap.length > 0 && heap_counter[min_heap[0]] === 0) {
                if (min_heap.length === 1) {
                  min_heap.pop();
                } else {
                  min_heap[0] = min_heap.pop();
                  top_down_sort(min_heap, true);
                }
              }
              if (min_heap.length > 0) {
                heap_counter[min_heap[0]] = heap_counter[min_heap[0]] - 1;
                if (min_heap.length === 1) {
                  min_heap.pop();
                } else {
                  min_heap[0] = min_heap.pop();
                  top_down_sort(min_heap, true);
                }
              }
              break;
          }
          break;
      }
      if (line_index === now_goal) {
        case_refine();
        min_heap = [];
        max_heap = [];
        heap_counter = {};
        if (test_command_number.length === test_number) {
          console.log(answer.join("\n"));
          rl.close();
        } else {
          line_index++;
        }
      }
    }
  }
});
