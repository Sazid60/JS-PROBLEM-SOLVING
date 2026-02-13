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