/* Task 1 */
var stringFour = "6";
var numberFour = 6;

if (stringFour !== numberFour) {
  console.log("equal");
} else {
  console.log("not equal");
}

/* Task 2 */
var animals = ["cow", "bird", "mouse"];

console.log(animals.length);

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
/* Task 3 */
var people = [
  {
    name: "Sam",
    age: 32,
  },
  {
    name: "Ingrid",
    age: 21,
  },
  {
    name: "Rolf",
    age: 55,
  },
];

for (var i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

for (var i = 0; i < people.length; i++) {
  console.log(people[i].age);
}

/* Task 4 */

function printName(title, name) {
  var fullName = title + "" + name;
  return fullName;
}

var personOne = printName("Lady", "Ingrid");

/* Task 5 */

// Task 1 MA
var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i].age);
}
