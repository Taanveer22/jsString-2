const sentence = "i am learning web development";
console.log(sentence);
const splited = sentence.split(" ");
console.log(splited);

const capitalizeWords = [];
for (let item of splited) {
  console.log(item);
  console.log(item[0].toUpperCase() + item.slice(1));
  capitalizeWords.push(item[0].toUpperCase() + item.slice(1));
}
console.log(capitalizeWords);

const capitalizeSentence = capitalizeWords.join(" ");
console.log(capitalizeSentence);
