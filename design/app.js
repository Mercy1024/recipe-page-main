"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";

// function logger() {
//   console.log(" My name is Kolade");
// }

// logger(); //calling / invoking / running function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const Juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return Juice;
// }

// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);

//  Function declaration and Expression

// function calcAge1(birthyear) {
//     return 2037 - birthyear;
// }
// const age1 = calcAge1(1991);

// const calcAge2 = function (birthyear) {
//     return 2037 - birthyear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

//Arrow functions

// const calcAge3 = birthyear => 2037 - birthyear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName)  => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Elijah"));
// console.log(yearsUntilRetirement(2004, "Bob"));

//Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(3, 6));
