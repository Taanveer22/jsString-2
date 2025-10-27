const word = "javascript";
console.log(word);

let count = 0;
for (let letter of word) {
  console.log(letter);
  if (letter === "a") {
    count++;
  }
}
console.log(count);
