// Question 1:
// For Loop: is a variable that is used to initilize the loop, condition(check false or true ) and increment/ dectrement operator.
for(let i=1; i<=10; i++){
    // console.log(i);
}

// Question 2:
let i=5;
while(i<16 ){
    // console.log(i);
i++;
}

// Question 3:
let j =1;
do{
    // console.log(j);
j++;
}while(j<=5)


// Question 5

for(let i=1; i<21; i++){
    if(i%2!=0){
        console.log(i);
    }

}

// Question 6

// Function is used to perform a specific task, that make one time and we call on a specific time.
// function(*intilizarion*;*condition*;*increment/decrement*){
//     // code to be executed
// }

function sum(a, b) {
    return a +b;
    
}
console.log(sum (5, 7));

// Question 7

function isEven(num){
    if(num % 2==0){
        return "This number is even(true)"
    }
    else{
        return"False"
    }
    
}
console.log(isEven(4));
console.log(isEven(7));

// Question 9
function mul(a,b){
    return a * b;
}
console.log(mul(5,7))

// Questioon 15
function hello(){
    console.log("Hello World");
}
for(let i=0; i<5; i++){
    hello();
}