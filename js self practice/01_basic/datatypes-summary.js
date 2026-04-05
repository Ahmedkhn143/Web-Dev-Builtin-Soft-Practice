// Primative Data type


// 7 types of primative data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Null 
// 5. Undefined
// 6. Symbol(make unique identifiers)
// 7. BigInt(for large integers)

// java script is a dynamically typed language, which means that the type of a variable is determined at runtime and can change during the execution of the program. This allows for flexibility in coding but also requires careful handling of data types to avoid unexpected behavior.


// const score = 100
// const scoreVlue = 100.4

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('id');
// const anotherId = Symbol('id');

// const bigNumber = 3448957743495823834n

// Non-primative data type (Reference data type)
// 1. Object
// 2. Array
// const heros = ["Ahmad", "ali", "abdullah"];
// let myObj = {
//     name: "Ahmad",
//     age: 25,
//     isStudent: true
// }
// 3. Function

// const myFunction =function(){
// console.log("Hello World");
// }


// memory types
// stack (primitive data types) give direct access to the data and are stored in a last-in-first-out (LIFO) manner, while
// heap (non-primitive data types) give reference to the location of the data in memory

let myYoutubeChannel = "Code with Ahmad";

let anotherChannel = myYoutubeChannel;

anotherChannel = "Code with ahmi";

console.log(anotherChannel); // Output: "Code with ahmi"
console.log(myYoutubeChannel); // Output: "Code with Ahmad" 


let userOne ={
    name: "Ahmad",
    age: 25

}
let userTwo = userOne;
userTwo.name = "Ali";
console.log(userOne.name); // Output: "Ali"
console.log(userTwo.name); // Output: "Ali"
