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

for(let i = 1; i <= 10; i++) {
  if(i === 5) {
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
