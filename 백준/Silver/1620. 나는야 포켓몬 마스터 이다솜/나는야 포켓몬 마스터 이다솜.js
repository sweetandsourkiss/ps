const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// your own code here
const [pokemon_number, quiz_number] = input[0].split(" ").map(Number);
const pokemon_key_obj = {};
const number_key_obj = {};

let _number = 1;
for (const pokemon of input.slice(1, pokemon_number + 1)) {
  pokemon_key_obj[pokemon.trim()] = _number;
  number_key_obj[_number++] = pokemon.trim();
}
let answer = "";
for (const num_or_pokemon of input.slice(
  pokemon_number + 1,
  pokemon_number + 1 + quiz_number
)) {
  if (parseInt(num_or_pokemon.trim())) {
    answer += number_key_obj[parseInt(num_or_pokemon.trim())] + "\n";
  } else {
    answer += pokemon_key_obj[num_or_pokemon.trim()] + "\n";
  }
}
console.log(answer);
