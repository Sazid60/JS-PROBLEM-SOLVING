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
