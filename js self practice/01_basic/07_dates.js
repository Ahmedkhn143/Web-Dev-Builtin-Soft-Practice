//  Dates

let myDate = new Date();
// this is not correct format of date
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toISOString());

// console.log(myDate.toDateString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());

// console.log(myDate.toUTCString());

// console.log(myDate.valueOf());  

// console.log(typeof myDate);
// date type is object, but it is not an array, it is a date object.


// let myCreatedDate = new Date(2026, 4, 15);
 // Note: Months are 0-indexed in JavaScript
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("2026-04-15");
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); 
// this will give us the current timestamp in seconds, as Date.now() returns milliseconds.

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleDateString('default',
    weekday: "long",
)
