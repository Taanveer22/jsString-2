// array is mutable => we can change array elements
const numbers = [2, 3, 5, 8];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);

numbers[0] = 22;
console.log(numbers);


// string is immutable => we can not change string elements
const language = 'javascript';
console.log(language);
console.log(language.length);
console.log(language[0]);

language[0] = 'x';
console.log(language);