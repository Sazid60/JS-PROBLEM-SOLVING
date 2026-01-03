
// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Rahim", age: 26, gender: "male" },
  { name: "Ayesha", age: 23, gender: "female" },
  { name: "Karim", age: 31, gender: "male" }
];

const filteredNames = people
  .filter(person => person.gender !== "female")
  .map(person => person.name);

console.log(filteredNames);



// 2.Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Bangladesh Economy", author: "Dr. Yunus", year: 2012 },
  { title: "Programming with JS", author: "Anisul Islam", year: 2018 }
];

const bookTitles = books.map(book => book.title);
console.log(bookTitles);


// 3.Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = n => n * n;
const double = n => n * 2;
const addFive = n => n + 5;

const calculate = n => addFive(double(square(n)));

console.log(calculate(4));



// 4.Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Axio", year: 2016 },
  { make: "Honda", model: "Grace", year: 2014 },
  { make: "Nissan", model: "X-Trail", year: 2019 }
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);



// 5.Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const citizens = [
  { name: "Hasan", age: 28 },
  { name: "Mahmud", age: 34 }
];

const updateAge = (name, newAge) => {
  citizens.forEach(person => {
    if (person.name === name) {
      person.age = newAge;
    }
  });
};

updateAge("Mahmud", 36);
console.log(citizens);

// 6.Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [10, 15, 20, 25, 30];

const evenSum = numbers.reduce((sum, num) => {
  return num % 2 === 0 ? sum + num : sum;
}, 0);

console.log(evenSum);


// 7. Task: Leap Year Checker

// Write a function that determines whether a given year is a leap year.

const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2028));



// 8. Task: Unique Values

// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.



const prices = [50, 100, 100, 150, 200, 200, 250];

const uniquePrices = [...new Set(prices)];
console.log(uniquePrices);



// 09.Task: Advanced Sorting

// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  { name: "Nayeem", grades: [70, 75, 80] },
  { name: "Farzana", grades: [88, 90, 92] }
];

students.sort((a, b) => {
  const avgA = a.grades.reduce((s, g) => s + g, 0) / a.grades.length;
  const avgB = b.grades.reduce((s, g) => s + g, 0) / b.grades.length;
  return avgB - avgA;
});

console.log(students);


// 10. Task: Functional Programming - Reduce

// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview


const items = [
  { quantity: 3, price: 120 }, 
  { quantity: 2, price: 250 }  
];

const totalCost = items.reduce((total, item) => {
  return total + item.quantity * item.price;
}, 0);

console.log(totalCost);
