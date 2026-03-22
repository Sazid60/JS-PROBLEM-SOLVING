let a = [1, 2, 3, 4, 5, 6, 7]

a.push(8)
console.log(`push result: ${a}`)

a.pop()
console.log(`pop result: ${a}`)

a.unshift(0)
console.log(`unshift result: ${a}`)

a.shift()
console.log(`shift result: ${a}`)

a.slice(2, 4)
console.log(`slice result: ${a.slice(2, 4)}`)

a.splice(2, 2, 'a', 'b')
console.log(`splice result: ${a}`)


a.splice(2, 2)
console.log(`splice result: ${a}`)

//  do while loop playground 
let b = 1;

do {
    console.log(" do while Number:", b);
    b++;
} while (b <= 5);

//  break statement with for loop playground

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(" for loop Number:", i);
}


//  break with wile loop playground

while (b <= 10) {
    if (b === 8) {
        break; // Exit the loop when b is 8
    }

    console.log("while loop Number:", b);
    b++; // increment b
}



//  do while with break statement 
do {
    if (b === 12) {
        break; // Exit the loop when b is 12
    }

    console.log("do while loop Number:", b);
    b++;

} while (b <= 20);

// do while with continue statement

do {
    if (b % 2 === 0) {
        b++; // Increment b before continue to avoid infinite loop
        continue; // Skip even numbers
    }
    console.log("do while loop Number inside continue statement:", b);
    b++;
} while (b <= 20);

// for loop with continue statement

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("for loop Number inside continue statement:", i);
}


// | Feature         | `for` loop                 | `do...while` loop            |
// | --------------- | -------------------------- | ---------------------------- |
// | Condition check | Before running             | After running                |
// | Runs minimum    | 0 times possible           | Always at least 1 time       |
// | Best use        | Known number of iterations | When action must happen once |

// charAt method example

let str = "Hello, World!";
let charAtIndex4 = str.charAt(4);
console.log(`Character at index 4: ${charAtIndex4}`); // Output: Character at index 4: o

// js is just in time compiled high level language. 

let passed = false;

console.log(typeof passed)

let num1 = 42;
let num2 = "2.24";

const totalNums = parseInt(num1) + parseFloat(num2)

console.log(totalNums)

console.log(parseFloat(totalNums.toFixed(1)))

console.log(Math.pow(num1, 2))

console.log(40 + "40")

console.log(40 - "40")

console.log(40 - "40a")

console.log(Number("30"))

console.log(isNaN("hello")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false


console.log(Number.isNaN("abc")); // false
console.log(Number.isNaN(NaN));   // true

console.log(isNaN(" "));       // false
console.log(isNaN("   "));     // false
console.log(isNaN("\n"));      // false
console.log(isNaN(true));      // false
console.log(isNaN(false));     // false

console.log(0 == "0");     // true
console.log(0 === "0");    // false
console.log(false == "0"); // true
console.log(false === "0");// false

console.log([] + []);    // ""
console.log([] + {});    // "[object Object]"
console.log({} + []);    // 0 in some cases, "[object Object]" in others

console.log(null == undefined); // true
console.log(null === undefined);// false
console.log(null + 1);          // 1
console.log(undefined + 1);     // NaN

console.log(NaN === NaN);        // false
console.log(Number.isNaN(NaN));  // true

let c = 5;
console.log(c++); // 5 (then c becomes 6)
console.log(++c); // 7 (c becomes 7 first)

if (!0) console.log("0 is falsy");
if (!"") console.log("'' is falsy");
if (!null) console.log("null is falsy");
if (!undefined) console.log("undefined is falsy");
if (!NaN) console.log("NaN is falsy");

console.log(true + 1)

console.log(false + 1)

let dumbarray = [1, 2, 3, 4, 5];

console.log(dumbarray[dumbarray.length - 1])  // last index value of the array 

console.log(dumbarray.slice(2))

console.log(dumbarray)

console.log(dumbarray[2])

const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(stringArray.includes("apple"))

console.log(stringArray.indexOf("apple"))
console.log(stringArray.indexOf("bpple"))

console.log(Array.isArray(stringArray))

console.log(stringArray.join(" khabo "))


// for loop 

// fo of loop 

for (const str of stringArray) {
    console.log(str)
} // gives the value of the array

for (const index in stringArray) {
    console.log(index)
} // gives the index of the array

for (let num = 0; num < 5; num++) {
    console.log(num)
}

// in case of string 
let greeting = "Hello, World!";
for (const char of greeting) {
    console.log(char);
}

console.log(greeting[1])

const sub = "chemistry";
// const Sub = "biology";
// const sUb = "Maths";
const book = " Chemistry"


console.log(sub.toLocaleLowerCase() === book.toLocaleLowerCase().trim());

const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.split(" ")) // if we split each and  every becomes array


const stringArray2 = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(stringArray2.join(' ')) // if we join its converted to string 

const firstName = "John";
const lastName = "Doe";

console.log(firstName.concat(" ", lastName)); // Output: John Doe


const sentence1 = "The quick brown fox jumps over the lazy dog.";

for (const letter of sentence1) {
    console.log(letter)
}


let reverseString = "";


for (const letter of sentence1) {
    reverseString = letter + reverseString;
}
console.log(reverseString);

const reversedBySplit = sentence1.split("").reverse().join("")

console.log(reversedBySplit)

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
}



console.log(person['age'])

console.log(person.name)

const keys = Object.keys(person);
console.log(keys)

const values = Object.values(person);
console.log(values)

delete person.age

console.log(person)

person.course = "Phitron"

console.log(person)

const numbers = [1, 2, 3, 4, 5];

const numberts_asc = numbers.sort((a, b) => a - b);

console.log(numberts_asc)

function add(a, b) {

    return a + b;
}

console.log(add(1, 2))

// number string, boolean null undefined -> primitive 
//  array object function -> non primitive  data type

//  using const we can not change the values but manipulate values of object and array 


// check leap year or not 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // Not a leap year
    }
}

console.log(isLeapYear(2020));

// calculate the avg of odd numbers in  an array 

function oddAvg(arr) {
    let newArr = []
    let sum = 0;
    for (arrElements of arr) {
        if (arrElements % 2 === 1) {
            newArr.push(arrElements)
            sum += arrElements
        }
    }
    return sum / newArr.length;
}

console.log(oddAvg([1, 2, 3, 4, 5, 6, 7, 8, 9]))


// remove duplicates from an array 

function removeDuplicates(arr) {
    let uniqueArr = [];
    for (arrElement of arr) {
        if (uniqueArr.includes(arrElement) === false) {
            uniqueArr.push(arrElement)
        }
    }

    return uniqueArr;

}

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]))

const today = new Date();
console.log(today)

const myName = () => console.log("sazid")

myName()

//  understanding maps 
const k = [1, 2, 3, 4, 5]
const res = k.map(x => x * 2)
console.log(res)

const res2 = k.forEach(x => console.log(x * 2)) // for each does not return anything

const result2 = k.filter(x => x % 2 === 0) // filter returns a new array with elements that satisfy the condition
console.log(result2)

const result3 = k.reduce((acc, curr) => acc + curr, 0) // reduce returns a single value by applying a function to an accumulator and each element in the array

console.log(result3)

const result4 = k.find(x => x > 3) // find returns the first element that satisfies the condition
console.log(result4)


//  class and object 
class Vehicle {
    // constructor runs automatically when `new Vehicle(...)` is called.
    // It initializes each new object with starting values (make, model, year).
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // method 
    move() {
        console.log(`${this.make} ${this.model} is moving.`);
    }
}

// Bus class extends Vehicle - defined outside, not nested inside
class Bus extends Vehicle {
    constructor(make, model, year, capacity) {
        super(make, model, year); // Call the parent class constructor
        this.capacity = capacity;
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, payload) {
        super(make, model, year); // Call the parent class constructor
        this.payload = payload;
    }
}

const vehicle = new Vehicle("Generic", "Vehicle", 2020);
console.log(vehicle);
vehicle.move();


//  classes 

class Animal1 {
  // constructor runs when you do: new Animal(...)
  constructor(name, sound) {
    this.name  = name;   // instance property
    this.sound = sound;
  }

  // method — shared via prototype (not copied to each instance)
  speak() {
    return `${this.name} says ${this.sound}!`;
  }

  // static method — called on the class, not an instance
  static kingdom() { return 'Animalia'; }
}

const dog = new Animal1('Rex', 'Woof');
dog.speak();            // → 'Rex says Woof!'
Animal1.kingdom();      // → 'Animalia'
dog.kingdom;           // → undefined (static ≠ instance)


class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound.`; }
}

class Dog extends Animal {
  // Dog inherits speak() automatically
  fetch() { return `${this.name} fetches the ball!`; }
}

const d = new Dog('Rex');
d.speak();   // inherited from Animal
d.fetch();   // own method

//  inheritance

// class Animal {
//   constructor(name) { this.name = name; }
//   speak() { return `${this.name} makes a sound.`; }
// }

// class Dog extends Animal {
//   // Dog inherits speak() automatically
//   fetch() { return `${this.name} fetches the ball!`; }
// }

// const d = new Dog('Rex');
// d.speak();   // inherited from Animal
// d.fetch();   // own method


// super method 

// class Animal {
//   speak() { return '...'; }
// }

// class Dog extends Animal {
//   speak() {
//     const base = super.speak();  // call parent method
//     return `${base} Woof!`;
//   }
// }

// const d = new Dog();
// d.speak();

// polymorphism

class Shape {
  area() { return 0; }
  describe() { return `Area = ${this.area()}`; }
}

class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return +(Math.PI * this.r ** 2).toFixed(2); }
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.w=w; this.h=h; }
  area() { return this.w * this.h; }
}

// Polymorphism in action — same interface, different results
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(s => console.log(s.describe()));


// truthy values 
// true, any number (except 0), any non-empty string, any object, any array, and the boolean value true itself are all considered truthy in JavaScript. '0', 'false', and [] are also truthy.

// falsy values 
// false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN are all considered falsy in JavaScript.


// callback function

function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Example of using a callback function
function processUser(name, callback) {
    callback(name);
}

processUser("Alice", greet);


// pass by value and pass by reference

let x = 10; // primitive type (number)
let y = x;
y = 20; // changing y does not affect x
console.log(x);

let obj1 = { name: "Alice" }; // non-primitive type (object)
let obj2 = obj1;
obj2.name = "Bob"; // changing obj2 also changes obj1
console.log(obj1.name);

//  how to stop it?
let obj3 = { name: "Charlie" };
let obj4 = { ...obj3 };
console.log(obj4.name); // → "Charlie"


// in case of nested objects, we need to do deep copy
let obj5 = { name: "Dave", address: { city: "New York" } };
let obj6 = JSON.stringify(obj5);
let obj7 = JSON.parse(obj6);
console.log(obj6)
console.log(obj7)
// console.log(obj6.name); // → "Dave"
// console.log(obj6.address.city); // → "New York"
// console.log(obj5.name)