const curr = new Date();
const seoul = curr.getTime() + 540 * 60 * 1000;
console.log(new Date(seoul).toISOString().split("T")[0]);
