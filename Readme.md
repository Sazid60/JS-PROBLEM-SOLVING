#### JS DEPTH EXPLORATION

- in do while loop the condition is checked after the loop so if the condition does not match still will show one output 

```js

let num = 10;

do {
  console.log("This will run once");
} while (num < 5);

```

- slice vs splice 

```js 

const a = [1,2,3,4,5]

 const b = a.slice(1,3) // index one theke suru kore index 3 er age porjonto 

console.log(b)


const a = [1,2,3,4,5]

 const b = a.splice(1,2, 5) // here 1 means starting index 2 means from the index how many to delete and 5 means what to put in the deleted position 

console.log(a)

```

- break in a loop (completely stops the loop )

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

```

```js 
let i = 1;

while (i <= 5) {
  if (i === 4) {
    break;
  }
  console.log(i);
  i++;
}

```

- continue in a loop (continue = skips current iteration, but loop continues.)

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

```

- Important: Be careful with while + continue to avoid infinite loops.

```js 

let i = 0;

while (i < 5) {
  i++;  // increment first

  if (i === 3) {
    continue;
  }

  console.log(i);
}

```

- power to a number

```js
math.pow(height,2)
```

```js
console.log(typeof(10%"10"))
```

```js
console.log(!true)
```

```js
console.log(!"")

console.log(!" ")
```

```js
console.log(true + 3)

```

```js
console.log(true + 3)
console.log(typeof isNaN)
console.log(isNaN(20))
console.log(isNaN("20"))
console.log(isNaN("ABC"))

```

- exploration of array 
- push pop shift unshift

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.slice(1,2))
fruits.push("s","a")
console.log(fruits)
console.log(fruits.indexOf("a"))
console.log(fruits[fruits.length - 1]);
console.log(fruits); // ["apple", "banana", "cherry"]
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "cherry", "orange"]
let last = fruits.pop();
console.log(last);    // "orange"
console.log(fruits);  // ["apple", "banana", "cherry"]
fruits.unshift("mango");
console.log(fruits); // ["mango", "apple", "banana", "cherry"]
let first = fruits.shift();
console.log(first);   // "mango"
console.log(fruits);  // ["apple", "banana", "cherry"]


```

```js

let fah = [0,1,2,3,4,5,6]

console.log(fah.slice(2))

const ah = fah.slice(0,2).concat(fah.slice(5))
```

```js

let fah = [0,1,2,3,4,5,6]
const a = fah.splice(0,2,100)
console.log(fah)
console.log(fah.includes(0))
console.log(Array.isArray(fah))
```

```js
let c = ["a","b","c","d"]

let d = ["e", "f", "g", "h", "i"]

console.log(c.concat(d))

console.log(c.join(" "))
```

```js
console.log(null == undefined); // true

console.log(null === undefined); // false
```

- understanding loops 

```js
let fah = [0,1,2,3,4,5,6]

for(const num of fah){
  console.log(num)
}

```

```js 

let num = 0 

while (num < 6){
  console.log("LOoping")
  num = num+1
}
```

- pure for loop

```js
for(let num = 0 ; num <5; num++){
  console.log(num)
}
```
- playing with string 

```js
let st = "I am Shahnawaz Sazid"

console.log(st.split(" "))

let reverse = ""
for (const letter of st){
  reverse = letter+reverse
}

console.log(reverse)
```

```js
const person = {
  name : "sazid",
  age : 27,
  profession : "developer",
  salary : 25000,
  married : true,
}

const income = person.salary

// console.log(income)

const keys = Object.keys(person)

console.log(keys)

const values = Object.values(person)

console.log(values)
```

```js
const person = {
  name : "sazid",
  age : 27,
  profession : "developer",
  salary : 25000,
  married : true,
}

delete person.age

console.log(person)
```

- Remove duplicate 

```js

function noDup(arr){
  let noDupArray = [];
  for(arrElm of arr){
    if(noDupArray.includes(arrElm) === false){
      noDupArray.push(arrElm)
    }
  }
  return noDupArray
}

const array = [1,1,2,3,4,4,5]

const newArr = noDup(array)

console.log(newArr)
```
- some techniques of js 

```js
const array = [1,1,2,3,4,4,5]

const min = Math.min(...array)

console.log(min)

const max = Math.max(...array)

console.log(max)

console.log(Math.PI)

console.log(Math.abs(1-5))

console.log(Math.round(4.5))

console.log(Math.floor(4.5))

console.log(Math.ceil(4.5))

console.log(Math.random()*10)

console.log(new Date())

const date = new Date()
console.log(date.getDate())
```

- variable swap without temp and destructuring 

```js
let a = 5;
let b = 7;

console.log(a, b)

a = b;
b = a;

console.log(a, b)
```

```js
let a = 5;
let b = 7;

const temp = a;

a = b;

b = temp;

console.log(a,b)

```

- dom understanding 

- event bubbling and stop propagation

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling Example</title>
  <style>
    #parent {
      padding: 40px;
      background-color: lightblue;
    }

    #child {
      padding: 20px;
      background-color: coral;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="parent">
    Parent Div
    <button id="child">Click Me</button>
  </div>

  <script>
    document.getElementById("parent").addEventListener("click", () => {
      console.log("Parent clicked");
    });

    document.getElementById("child").addEventListener("click", (event) => {
      console.log("Child clicked");
      event.stopPropagation(); // Stops bubbling
    });
  </script>

</body>
</html>

```

- ANOTHER EXAMPLE OF DOM PROPAGATION 

```HTML
<!-- <!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling Example</title>
  <style>
    #parent {
      padding: 40px;
      background-color: lightblue;
    }

    #child {
      padding: 20px;
      background-color: coral;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="parent">
    Parent Div
    <button id="child">Click Me</button>
  </div>

  <script>
    document.getElementById("parent").addEventListener("click", () => {
      console.log("Parent clicked");
    });

    document.getElementById("child").addEventListener("click", (event) => {
      console.log("Child clicked");
      event.stopPropagation(); // Stops bubbling
    });
  </script>

</body>
</html> -->

<!doctype html>
<html>
  <head>
    <title>stopImmediatePropagation Example</title>
  </head>
  <body>
    <div id="parent" style="padding: 40px; background: lightblue">
      Parent Div
      <button id="child" style="padding: 20px">Click Me</button>
    </div>

    <script>
      const parent = document.getElementById("parent");
      const child = document.getElementById("child");

      parent.addEventListener("click", () => {
        console.log("Parent clicked");
      });

      // First listener on child
      child.addEventListener("click", (event) => {
        console.log("First child listener");
        //   event.stopImmediatePropagation(); // 👈 Stops everything
        // event.stopPropagation();
      });

      // Second listener on child
      child.addEventListener("click", () => {
        console.log("Second child listener");
      });
    </script>
  </body>
</html>

```

- event delegation 

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Delegation Example</title>
  <style>
    body {
      font-family: Arial;
    }

    #list {
      background-color: lightblue;
      padding: 20px;
      width: 200px;
    }

    li {
      background-color: white;
      margin: 5px 0;
      padding: 8px;
      cursor: pointer;
    }

    button {
      margin-top: 15px;
    }
  </style>
</head>
<body>

  <h2>Event Delegation Demo</h2>

  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <button id="addBtn">Add New Item</button>

  <script>
    const list = document.getElementById("list");
    const button = document.getElementById("addBtn");

    // 🔥 Event Delegation: One listener on parent
    list.addEventListener("click", function(event) {

      console.log("Current Target:", event.currentTarget);
      console.log("Actual Clicked Element:", event.target);

      // Make sure user clicked on LI only
      if (event.target.tagName === "LI") {
        alert("You clicked " + event.target.textContent);
      }
    });

    // Add new item dynamically
    button.addEventListener("click", function() {
      const newItem = document.createElement("li");
      newItem.textContent = "New Item";
      list.appendChild(newItem);
    });

  </script>

</body>
</html>

```

- capturing vs bubling

```html
<!DOCTYPE html>
<html>
<head>
  <title>Capturing vs Bubbling</title>
  <style>
    #parent {
      padding: 40px;
      background-color: lightblue;
    }

    #child {
      padding: 20px;
      background-color: coral;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="parent">
    Parent Div
    <button id="child">Click Me</button>
  </div>

  <script>
    const parent = document.getElementById("parent");
    const child = document.getElementById("child");

    // 🔵 CAPTURING (third parameter = true)
    parent.addEventListener("click", function() {
      console.log("Parent - Capturing");
    }, true);

    child.addEventListener("click", function() {
      console.log("Child - Capturing");
    }, true);

    // 🔴 BUBBLING (default behavior)
    parent.addEventListener("click", function() {
      console.log("Parent - Bubbling");
    });

    child.addEventListener("click", function() {
      console.log("Child - Bubbling");
    });

  </script>

</body>
</html>

```

- mutable 

```js 

let arr = [1, 2, 3];
arr.push(4);

console.log(arr); // [1, 2, 3, 4]

```

```js 
let user = { name: "Shahnawaz" };
user.name = "Sazid";

console.log(user.name); // Sazid

```
- immutable 
```js 
let str = "Hello";
str[0] = "Y";

console.log(str); // Hello

```

```js 
let x = 10;
let y = x;

y = 20;

console.log(x); // 10
console.log(y); // 20

```


| Feature              | Mutable | Immutable       |
| -------------------- | ------- | --------------- |
| Can change original? | ✅ Yes   | ❌ No            |
| Memory usage         | Less    | More (new copy) |
| Predictability       | Lower   | Higher          |
| Used in React        | ❌ Avoid | ✅ Preferred     |


- normal function vs arrow function 

| Feature         | Regular Function | Arrow Function |
| --------------- | ---------------- | -------------- |
| Syntax          | Longer           | Shorter        |
| `this`          | Dynamic          | Lexical        |
| `arguments`     | ✅ Yes            | ❌ No           |
| Constructor     | ✅ Yes            | ❌ No           |
| Hoisting        | ✅ Yes            | ❌ No           |
| Implicit return | ❌ No             | ✅ Yes          |

- playing with object 

```js
const person = {
  name : "sazid",
  age : 27,
  profession : "developer",
  salary : 25000,
  married : true,
}

const entries = Object.entries(person)

console.log(entries)

Object.seal(person)
Object.freeze(person)
```

### Questions 

1. what is es6 ? have you ever used anything from es6?
- let and const Block-scoped variables (better than var).
```js
let age = 25;   // can change
const name = "Sazid"; // cannot change

```

- Arrow Functions (=>) Shorter and cleaner functions.

```js 
// ES5
function add(a, b) {
  return a + b;
}

// ES6
const add = (a, b) => a + b;

```

- Template Literals Use backticks for string interpolation.

```js 
const name = "Sazid";
console.log(`Hello ${name}`);
```

- Destructuring Extract values easily from objects/arrays.

```js 
const user = { name: "Sazid", age: 25 };

const { name, age } = user;
console.log(name);

```

- Default Parameters Set default values in functions.

```js

const greet = (name = "Guest") => {
  console.log(`Hello ${name}`);
};

greet(); // Hello Guest

```

- Spread Operator (...) Copy or merge arrays/objects.

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

```

- Rest Parameters Collect multiple arguments into an array.

```js
const sum = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

```

- Modules (Import/Export) Used in modern JavaScript apps.

```js
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./math.js";

```

- Classes (OOP) Cleaner syntax for object-oriented programming.

```js 
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

```

- Promises (Async Programming)

```js
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
};

```

- advantages of arrow function
  1. Implicit Return 
  2. shorter syntax
  3. No this Confusion (Lexical this)Biggest advantage Arrow functions do not have their own this. They inherit this from the parent scope.

Problem with normal function:


```js 
const obj = {
  name: "Sazid",
  greet: function () {
    setTimeout(function () {
      console.log(this.name); // undefined
    }, 1000);
  },
};
```

Arrow function fix:

```js
const obj = {
  name: "Sazid",
  greet() {
    setTimeout(() => {
      console.log(this.name); // Sazid ✅
    }, 1000);
  },
};

```

#### PART 1 — What is this in JavaScript?
- Simple meaning: this = “Who is calling the function?”

```js 

const obj = {
  name: "Sazid",
  sayName() {
    console.log(this.name);
  },
};

obj.sayName();

```
- obj is calling sayName(), so this = obj

- Example 2 — Function alone

```js 
function test() {
  console.log(this);
}
test();

```
- Output (browser): window Because no object called it. so default 

```js 
this = window (browser)
this = global (Node)

```
#### PART 2 — Rule of this

✅ Rule 1

Object calls → this = object

❌ Rule 2

No object → this = global

#### PART 3 — The setTimeout Problem

```js
const obj = {
  name: "Sazid",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

```

Why undefined?

Because:

setTimeout runs the function

NOT the object

#### PART 4 — Arrow Function Difference

Normal function:

Creates new this

Arrow function:

❗ Does NOT create this

It borrows from parent.

- What is Lexical Scope?
Simple meaning:

Scope based on where code is written, not how it’s called.

“Lexical” = related to text/location.

- for this Call decides this in case of normal function
- Location decides this in case of arrow function 

#### PART 12 — When to Use Arrow Functions
✅ Use arrow when:

Callbacks

setTimeout

Promises

Array methods (map, filter)

❌ Avoid arrow when:

Object methods

Constructors

Event listeners (sometimes)

#### sTRICT MODE IN JS 

- Strict Mode is a safer way to run JavaScript that catches common mistakes and enforces cleaner coding rules.

#### fOR OF VS FOR IN 
- FOR IN 
Iterates over: Keys / Property names of an object or array

Mostly used for: Objects

Output: Index (for arrays) or key (for objects)

```JS 
const user = { name: "Sazid", age: 25 };

for (let key in user) {
  console.log(key);        // name, age
  console.log(user[key]);  // Sazid, 25
}

```

```JS 
const arr = [10, 20, 30];

for (let index in arr) {
  console.log(index);  // 0, 1, 2
  console.log(arr[index]); // 10, 20, 30
}

```
- FOR OF 
for…of (ES6)

Iterates over: Values of iterable objects (Array, String, Map, Set, etc.)

Mostly used for: Arrays, Strings, Sets, Maps

Output: Actual value
```JS

const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);  // 10, 20, 30
}

```

| Feature          | for…in                 | for…of                             |
| ---------------- | ---------------------- | ---------------------------------- |
| Iterates over    | Keys / property names  | Values                             |
| Works on         | Objects, Arrays (keys) | Iterables: Array, String, Map, Set |
| Output           | Index/key              | Actual value                       |
| Syntax advantage | Good for object props  | Good for array/string values       |
| ES Version       | ES5                    | ES6                                |

#### Difference Between map and forEach in JavaScript

forEach

Purpose: Executes a function for each element without returning anything

Returns: undefined

Use Case: When you want to perform side effects like logging or updating DOM


```js 
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num * 2);
});

// Output:
// 2
// 4
// 6

```

map

Purpose: Transforms each element and returns a new array

Returns: New array of same length

Use Case: When you want a new array based on original array


```js 

const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]

```

| Feature           | forEach               | map                        |
| ----------------- | --------------------- | -------------------------- |
| Return Value      | `undefined`           | New array                  |
| Purpose           | Side effects          | Transforming data          |
| Chainable         | No                    | Yes                        |
| Mutates Original? | Depends (can mutate)  | No (creates new array)     |
| Example Use Case  | Logging, updating DOM | Creating transformed array |
