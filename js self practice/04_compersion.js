// number compersion operators 
// console.log(2 > 1);
// true
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log('2' > 1);
// true because '2' is converted to number 2
console.log('01' == 1);
// true because '01' is converted to number 1



console.log(null == 0);
// false because null is converted to 0 when compared to a number
console.log(null > 0);
// false because null is converted to 0 when compared to a number
console.log(null < 0);
// false because null is converted to 0 when compared to a number
console.log(null >= 0);
// true because null is converted to 0 when compared to a number
console.log(null <= 0);
// true because null is converted to 0 when compared to a number

// reason for the above behavior is that null is considered as an empty value and it is converted to 0 when compared to a number. However, when compared to a non-number, it is considered as a falsy value and it is not converted to any value. that an equality  check == and comparisons >, <, >=, <= behave differently when it comes to null. comparisons >, <, >=, <= convert null to 0, while equality check == does not convert null to any value and considers it as a falsy value.

console.log(undefined == 0);
// false because undefined is not converted to 0 when compared to a number
console.log(undefined > 0);
// false because undefined is not converted to 0 when compared to a number
console.log(undefined < 0);
// false because undefined is not converted to 0 when compared to a number

// avoid this type of conversion 
// ===
console.log(2 === 2);
// true because both operands are of the same type and have the same value
console.log(2 === '2');
