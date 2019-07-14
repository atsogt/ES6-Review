//Lecture: let and const

// ES5
// var name5 = "Jane Smith";
// var age5 = 23;
// name5 = "Jane Miller";
// console.log(name5);

// //ES6
// const name6 = "Jane Smith";
// let age6 = 23;
// name6 = "Jane Millers";
// console.log(name6);

// ES5
// function driversLicence(passedTest) {
//   if (passedTest) {
//     var firstName = "John";
//     var yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       ", born in " +
//       yearOfBirth +
//       ", is now officially allowed to drive a car."
//   );
// }

// // ES6

// driversLicence(true);
// function driversLicence6(passedTest) {
//   let firstName;
//   const yearOfBirth = 1990;

//   if (passedTest) {
//     firstName = "Mon";
//   }
//   console.log(
//     firstName +
//       ", born in " +
//       yearOfBirth +
//       ", is now officially allowed to drive a car."
//   );
// }

// driversLicence6(true);

// IIFE'S AND BLOCKS

// {
//   const a = 1;
//   let b = 2;
// }

//////////////////
// STRINGS

let firstName = "Anand";
let lastName = "Tsogtbaatar";
const yearOfBirth = 1994;

function calcAge(year) {
  return 2019 - year;
}
//es6
// console.log(`${firstName} ${lastName} was born in ${yearOfBirth}.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith("A"));
console.log(n.endsWith("r"));
console.log(n.includes("gtbaa"));
console.log(lastName.repeat(6));
