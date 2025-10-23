const institute = "Saidpur Cantonment Public School And College";
console.log(institute);
console.log(institute.toLowerCase());
console.log(institute.toUpperCase());

// case checking by toLowerCase() or toUpperCase() method
const subject = "Chemistry";
const book = "chemistry";
if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("i have passed");
} else {
  console.log("i have failed");
}

const mobile = "xiaomi ";
const phone = " xiaomi";

// empty space checking by trim() method
if (mobile.trim() === phone.trim()) {
  console.log("same brand");
} else {
  console.log("different brand");
}
