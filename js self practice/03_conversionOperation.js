let score = "40aa"

// show type of score
console.log(typeof score );
console.log(typeof(score));
// covert string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// show value store in valueInNumber
console.log(valueInNumber);

//  "33" => 33
// "33abc" => NaN
// "abc33" => NaN
// "abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1
// convert number into boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "ahmad" => true

let someNumber  = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// ******************operations******************

let value = 3
// convert positive value to negative value
let negValue = -value
console.log(negValue);

// console.log(2+2); // addition
// console.log(2-2); // subtraction
// console.log(2*2); // multiplication
// console.log(2/2); // division
// console.log(2%2); // modulus operator gives remainder
// console.log(2**3); // exponentiation operator gives power

let str1 = "Hello"
let str2 = "Ahmad"

let str3 = str1 + str2
console.log(str3); // concatenation 

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2     ); // 122
console.log(1 + 2 + "2");

console.log(+true);
// give output 1
console.log(+"");
// give output 0
console.log(+"ahmad");
// give output NaN

// this is not best practice to use + for type conversion because it can create confusion and also it can give unexpected results in some cases. it is better to use Number() or String() or Boolean() for type conversion.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101