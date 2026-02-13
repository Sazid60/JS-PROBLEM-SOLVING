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