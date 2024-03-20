const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [start_pos, target_pos] = input[0].split(" ").map(Number);
const dp_array = Array(200001).fill(Number.POSITIVE_INFINITY);
for (let pos = 0; pos <= start_pos; pos++) {
  dp_array[pos] = start_pos - pos;
  dp_array[pos * 2] = Math.min(dp_array[pos * 2], dp_array[pos] + 1);
}
for (let pos = start_pos + 1; pos <= target_pos; pos++) {
  dp_array[pos] = Math.min(
    dp_array[pos],
    dp_array[pos - 1] + 1,
    dp_array[pos + 1] + 1,
    dp_array[pos + 2] + 2
  );
  dp_array[pos * 2] = Math.min(dp_array[pos * 2], dp_array[pos] + 1);
}

console.log(dp_array[target_pos]);
