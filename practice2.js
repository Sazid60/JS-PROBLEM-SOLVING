// const a = [1,2,3,4,5]

// const b = a.pop()

// console.log(b)

// console.log(a)



// const a = [1,2,3,4,5]

//  const b = a.slice(1,3) // index one theke suru kore index 3 er age porjonto 

// console.log(b)


// const a = [1,2,3,4,5]

//  const b = a.splice(1,2, 5) 

// console.log(a)


// let num = 10;

// do {
//   console.log("This will run once");
// } while (num < 5);


// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }


// let i = 1;

// while (i <= 5) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
//   i++;
// }


// console.log(typeof(10%"10"))

// console.log(!"")

// console.log(!" ")

// console.log(typeof isNaN)

// console.log(isNaN(20))


// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits.slice(1,2))
// fruits.push("s","a")
// console.log(fruits)
// console.log(fruits.indexOf("a"))
// console.log(fruits[fruits.length - 1]);
// console.log(fruits); // ["apple", "banana", "cherry"]
// fruits.push("orange");
// console.log(fruits); // ["apple", "banana", "cherry", "orange"]
// let last = fruits.pop();
// console.log(last);    // "orange"
// console.log(fruits);  // ["apple", "banana", "cherry"]
// fruits.unshift("mango");
// console.log(fruits); // ["mango", "apple", "banana", "cherry"]
// let first = fruits.shift();
// console.log(first);   // "mango"
// console.log(fruits);  // ["apple", "banana", "cherry"]




// let fah = [0,1,2,3,4,5,6]

// console.log(fah.slice(2))

// const ah = fah.slice(0,2).concat(fah.slice(5))

// let fah = [0,1,2,3,4,5,6]
// const a = fah.splice(0,2,100)
// console.log(fah)
// console.log(fah.includes(0))
// console.log(Array.isArray(fah))

// let c = ["a","b","c","d"]

// let d = ["e", "f", "g", "h", "i"]

// console.log(c.concat(d))

// console.log(c.join(" "))

// console.log(null == undefined); // true

// console.log(null === undefined); // false

// let fah = [0,1,2,3,4,5,6]

// for(const num of fah){
//   console.log(num)
// }

// let fah = [0,1,2,3,4,5,6]

// let num = 0 

// while (num < 6){
//   console.log("LOoping")
//   num = num+1
// }

// for(let num = 0 ; num <5; num++){
//   console.log(num)
// }

// let st = "I am Shahnawaz Sazid"

// console.log(st.split(" "))

// let reverse = ""
// for (const letter of st){
//   reverse = letter+reverse
// }

// console.log(reverse)

// const person = {
//   name : "sazid",
//   age : 27,
//   profession : "developer",
//   salary : 25000,
//   married : true,
// }

// delete person.age

// console.log(person)

// const income = person.salary

// // console.log(income)

// const keys = Object.keys(person)

// console.log(keys)

// const values = Object.values(person)

// console.log(values)

// function noDup(arr){
//   let noDupArray = [];
//   for(arrElm of arr){
//     if(noDupArray.includes(arrElm) === false){
//       noDupArray.push(arrElm)
//     }
//   }
//   return noDupArray
// }

// const array = [1,1,2,3,4,4,5]

// const newArr = noDup(array)

// console.log(newArr)

// const array = [1,1,2,3,4,4,5]

// const min = Math.min(...array)

// console.log(min)

// const max = Math.max(...array)

// console.log(max)

// console.log(Math.PI)

// console.log(Math.abs(1-5))

// console.log(Math.round(4.5))

// console.log(Math.floor(4.5))

// console.log(Math.ceil(4.5))

// console.log(Math.random()*10)

// console.log(new Date())

// const date = new Date()
// console.log(date.getDate())

// let a = 5;
// let b = 7;

// console.log(a, b)

// a = b;
// b = a;

// console.log(a, b)


// let a = 5;
// let b = 7;

// const temp = a;

// a = b;

// b = temp;

// console.log(a,b)


// const nums = [4,5,6];

// const nums2 = [...nums];

// nums2.push(12)

// console.log(nums)
// console.log(nums2)



// const person = {
//   name : "sazid",
//   age : 27,
//   profession : "developer",
//   salary : 25000,
//   married : true,
// }

// const entries = Object.entries(person)

// console.log(entries)

// const arr = [10, 20, 30];

// for (let index in arr) {
//   console.log(index);  // 0, 1, 2
//   console.log(arr[index]); // 10, 20, 30
// }


// const user = { name: "Sazid", age: 25 };

// for (let key in user) {
//   console.log(key);        // name, age
//   console.log(user[key]);  // Sazid, 25
// }


// class Product {
//     country = 'Bangladesh';
//     speak(talk) {
//         console.log(`Kotha bolo ${talk}`)
//     }
// }

// const lenovo = new Product()

// lenovo.speak("kisu komu na")


class Product {
    country = "Bangladesh"
    constructor(name) {
        this.name = name
    }
    speak(talk) {
        console.log(`Kotha bolo ${talk}`)
    }
}

const lenovo = new Product('Lebu')

lenovo.speak("kisu komu na")