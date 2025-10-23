// join() method convert array into string
const cars = ["bmw", "toyata", "suzuki"];
console.log(cars);
console.log(typeof cars);

const convertedCars = cars.join();
const convertedCars2 = cars.join('');
const convertedCars3 = cars.join(' ');
const convertedCars4 = cars.join('+');
console.log(convertedCars);
console.log(typeof convertedCars);
console.log(convertedCars2);
console.log(convertedCars3);
console.log(convertedCars4);
