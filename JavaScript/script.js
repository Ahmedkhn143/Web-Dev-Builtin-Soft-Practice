// Loops in js 
// for loop, while loop, do while loop, for in loop, for of loop

// for (*initialization*;*Condition*;*increment/decrement*) {
//     // code to be executed
// }
let a = 1
for (let i = 0; i < 100; i++) {
    console.log(a + i);   
}
 
// for in loop 

let obj = {
    name: "Ahmad",
    age:20,
    role: "Developer"
}
// for in loop
for (const key in obj) {
    
    const element = obj[key];
    console.log(key, element);
       
}
// for of loop
 
for (const he of "Ahmad") {
    console.log(he);
}

// while loop
let i =8;
while (i>4){
    console.log(i);
    i--;
    
}

// do while loop

let j = 9;
do{
    console.log(j);
    j++;
} while (j <= 15);


// function in js 
function fun(Ahmad) {
  return "Hello " + Ahamd;
}
console.log(fun)

// DOM
// differece between id and class 