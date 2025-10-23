const sentence = "i am learning web development";
console.log(sentence);
let reverse = "";
for (let i = 0; i < sentence.length; i++) {
  // console.log(i);
  console.log(sentence[i]);
  reverse = sentence[i] + reverse;
}
console.log(reverse);
