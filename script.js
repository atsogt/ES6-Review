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

// ES6
/*{
  const a = 1;
  let b = 2;
  var c = 3;
}

//console.log(a + b);
console.log(c);

// ES5
(function() {
  var c = 3;
})();*/

//console.log(c);

//////////////////
// STRINGS

// let firstName = "Anand";
// let lastName = "Tsogtbaatar";
// const yearOfBirth = 1994;

// function calcAge(year) {
//   return 2019 - year;
// }
//es6
// console.log(`${firstName} ${lastName} was born in ${yearOfBirth}.`);

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith("A"));
// console.log(n.endsWith("r"));
// console.log(n.includes("gtbaa"));
// console.log(lastName.repeat(6));

////////////////////////////////////
//Arrow Functions

// const years = [1994, 1992, 1965, 1964];

// //ES 5
// var ages5 = years.map(function(el) {
//   return 2019 - el;
// });
// console.log(ages5);

// //ES 6

// let ages6 = years.map(el => 2019 - el);
// // console.log(ages6);

// ages6 = years.map((el, i) => `Age element is ${i + 1}: ${2019 - el}`);
// console.log(ages6);

// ages6 = years.map((el, i) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Element ${i + 1}: ${age}`;
// });
// console.log(ages6);

//Lecture Arrow functions 2

// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector(".green").addEventListener("click", function() {
//       var str =
//         "This is box " + self.position + " and it's color is " + self.color;
//       alert(str);
//     });
//   }
// };

// box5.clickMe();

// const box6 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     document.querySelector(".green").addEventListener("click", () => {
//       var str =
//         "This is boxy here " + this.position + " and this box is " + this.color;
//       alert(str);
//     });
//   }
// };

// box6.clickMe();

// const box66 = {
//   color: "green",
//   position: 1,
//   clickMe: () => {
//     document.querySelector(".green").addEventListener("click", () => {
//       var str =
//         "This is boxy here " + this.position + " and this box is " + this.color;
//       alert(str);
//     });
//   }
// };

// box66.clickMe();

// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(el) {
//       return this.name + " is friends with " + el;
//     }.bind(this)
//   );
//   console.log(arr);
// };

// new Person("Anand").myFriends5(friends);
/*function Person(name) {
  this.name = name;
}
let friends = ["B", "C", "A"];

Person.prototype.myFriends6 = function(friends) {
  let arr = friends.map(el => `${this.name} is friends with ${el} `);

  console.log(arr);
};

new Person("Bill").myFriends6(friends);
new Person("ANand").myFriends6(friends);
*/

// Lecture: Destructuring

/*const [name, year] = ["Jon", 1994];
console.log(name);
console.log(year);

const obj = {
  firstName: "john",
  lastName: "Smith"
};

const { firstName, lastName } = obj;
console.log(firstName, lastName);

const { firstName: a, lastName: b } = obj;

console.log(a, b);

function calcAgeRetirement(year, retirementAge) {
  const age = new Date().getFullYear() - year;
  return [age, retirementAge - age];
}
 
const [age, retirementAge] = calcAgeRetirement(1994, 65);
console.log(age, `years until retirement ${retirementAge}`);
*/

//////
//Lecture: Arrays

// const boxes = document.querySelectorAll(".box");

// var boxesArr5 = Array.prototype.slice.call(boxes);
// // boxesArr5.forEach(function(cur) {
// //   cur.style.backgroundColor = "dodgerblue";
// // });

// //ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === "box blue") {
//     continue;
//   }
//   boxesArr5[i].textContent = "I changed to blue";
// }

// for (const cur of boxesArr6) {
//   if (cur.className.includes("blue")) {
//     continue;
//   }
//   cur.textContent = " i changed to blue";
// }

// // ES5
// var ages = [12, 17, 21, 11, 12, 33, 42];
// var full = ages.map(function(cur) {
//   return cur >= 18;
// });
// console.log(full);
// var notTrue = full.indexOf(true);

// console.log(notTrue);

//ES6
/*
var over = [];
var under = [];

ages.forEach(cur => {
  if (cur >= 18) {
    over.push(cur);
  } else {
    under.push(cur);
  }
});

console.log(`${over} & ${under}`);
*/

//////////////
//Lecture: Spread Operator

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum = addFourAges(21, 21, 21, 21);
// console.log(sum);

// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// const sum3 = addFourAges(...ages);
// console.log(sum3);
//gotta love the spread operator

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => (cur.style.color = "yellow"));

// function isFullAge6(l, ...years) {
//   years.forEach(cur => console.log(2019 - cur >= l));
// }

// isFullAge6(100, 1990, 1997, 2015, 2016, 1922);

// function isFullage6(limit, ...years) {
//   years.forEach(cur => console.log(new Date().getFullYear() - cur >= limit));
// }

// isFullage6(21, 1994, 2005, 2006, 1992);

/////////////////////
// Default Parameters
/*

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "american")
    : (nationality = nationality);

  (this.firstName = firstName),
    ((this.yearOfBirth = yearOfBirth),
    (this.lastName = lastName),
    (this.nationality = nationality));
}

var john = new SmithPerson("john", 1992);
var emily = new SmithPerson("emily", 1994, "diaz", "mexican");
*/

//ES 6
/*
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "English"
) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new SmithPerson("john", 1992);
var emily = new SmithPerson("emily", 1994, "diaz", "mexican");
*/

/////////////////////
//Lecture : Maps
/*

const question = new Map();
question.set(
  "question",
  "What is the officila name of the major update of the latest Javascript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("Correct", 3);
question.set(true, "Correct Answer");
question.set(false, "Wrong Answer, Please try again");
console.log(question.get("question"));
*/
// console.log(question.size);

// if (question.has(4)) {
//   // question.delete(4);
// }

/*question.forEach((value, key) => {
  console.log(`This is  ${key} and it's set to ${value}`);
});
*/
/*

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value} `);
  }
}
const ans = parseInt(prompt("Enter the correct answer"));

console.log(question.get(ans === question.get("Correct")));
*/

//////////////////////////
// Lecture: Classes
/*
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};

var john5 = new Person5("John", 1990, "teacher");

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log("Hello");
  }
}

const john6 = new Person6("Jon", 1990, "Coder");
Person6.greeting();
*/

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olymicGames = olymicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);

johnAthlete5.calculateAge();
