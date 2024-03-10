const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [ROW, COLUMN, now_block] = input[0].split(" ").map(Number);
const land = Array.from({ length: ROW }, (_, index) =>
  input[index + 1].split(" ").map(Number)
);
let answer_time = Number.POSITIVE_INFINITY;
let answer_height = -1;

let min_height = Number.POSITIVE_INFINITY;
let max_height = Number.NEGATIVE_INFINITY;

for (let row = 0; row < ROW; row++) {
  for (let col = 0; col < COLUMN; col++) {
    min_height = Math.min(min_height, land[row][col]);
    max_height = Math.max(max_height, land[row][col]);
  }
}
for (
  let targetHeight = min_height;
  targetHeight <= max_height;
  targetHeight++
) {
  // 블록 개수가 가능한지 확인
  let _needed_block_remove = 0;
  let _needed_block_add = 0;
  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COLUMN; col++) {
      const _add_or_remove_block = land[row][col] - targetHeight;
      if (_add_or_remove_block > 0)
        _needed_block_remove += _add_or_remove_block;
      else if (_add_or_remove_block < 0)
        _needed_block_add += -_add_or_remove_block;
    }
  }
  if (_needed_block_add - _needed_block_remove > now_block) continue;
  // 시간 측정
  const _needed_time = _needed_block_remove * 2 + _needed_block_add;
  // 현재 값보다 작거나 같으면 높이와 시간을 초기화
  if (_needed_time <= answer_time) {
    answer_time = _needed_time;
    answer_height = targetHeight;
  }
}

console.log(answer_time, answer_height);
