// let word = "Xylophone";
let word = "proxy";
console.log(word);

if (word.includes("x")) {
  word = word.replaceAll("x", "y");
} else if (word.includes("X")) {
  word = word.replaceAll("X", "Y");
} else {
  word = word;
}

console.log(word);
