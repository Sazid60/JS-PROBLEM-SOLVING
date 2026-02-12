// // function add (a,b){
// //     console.log(typeof (a+b))
// //     return a+b

// // }

// // const addition = add("5", 2)

// // console.log(addition)

// // console.log(typeof NaN);
// // console.log(3 + 2 + "7");


// // true

// // [1, 2, 3] == [1, 2, 3]
// // [1, 2, 3] == [1, 2, 3]
// // console.log([1, 2, 3] == [1, 2, 3] )
// // console.log([1, 2, 3] === [1, 2, 3] )


// // let a = [1, 2, 3];
// // let b = [1, 2, 3];
// // let c = a;

// // console.log(a == b); // false, different objects
// // console.log(a === b); // false, different objects
// // console.log(a == c); // true, same object
// // console.log(a === c); // true, same object

// // console.log(typeof []);


// // (1 < 2 < 3 ) vs (3 > 2 > 1)


// // console.log((1 < 2 < 3 ))

// // console.log(((false) < 1))
// // console.log((true (1) > 1))

// // console.log((4>3)>(4<7))

// // console.log(parseFloat((0.1 + 0.2).toFixed(1))=== 0.3);

// // VS Code console-friendly

// // Works because function is hoisted

// // console.log("var",a)
// // console.log("Sum:", sum(5, 10));

// // function sum(a, b) {
// //     return a + b;
// // }

// // // But this won't work with let/const
// // // console.log(subtract(10, 5)); // ReferenceError
// // const subtract = function(a, b) {
// //     return a - b;
// // };

// // console.log("Subtract:", subtract(10, 5));


// // var a = 10

// // let c = 23



// // counter.js
// // counter.js

// // function createCounter() {
// //     let count = 0; // private variable

// //     return function() {
// //         count++; // increment
// //         return count;
// //     };
// // }

// // const counter = createCounter();

// // console.log(counter()); // 1
// // console.log(counter()); // 2
// // console.log(counter()); // 3


// // function counter() {
// //     let count = 0;   // count is reset every call
// //     count++;         // increment by 1
// //     return count;
// // }

// // console.log(counter()); 
// // console.log(counter()); 
// // console.log(counter());


// function countdown(n) {
//     if (n === 0) {           // ✅ base case
//         console.log("Done!");
//         return;
//     }

//     console.log(n);
//     countdown(n - 1);        // 🔁 recursive call
// }

// countdown(5);


