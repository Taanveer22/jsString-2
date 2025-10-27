let word = "ReactAngularVue";
console.log(word);

let count = 0;
for (let letter of word) {
  console.log(letter);
  if (letter === "a" || letter === "A") {
    count++;
  }
}
console.log(count);
