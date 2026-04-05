let name = "Ahamd "
let repoCount = 1000

console.log(name +repoCount + " repositories") // Output: "Ahmad 1000 repositories" this is a old way of concatenating strings and variables

console.log(`Hello, my name is ${name} and I have ${repoCount} repositories.`) // Output: "Hello, my name is Ahmad and I have 1000 repositories." this is a modern way of concatenating strings and variables. Its Called string interpolation and it is more readable and easier to use than the old way of concatenating strings and variables.


const gameName = new String('Ahmad')

console.log(gameName[0]); // Output: "A" this is because strings are array-like objects in JavaScript, which means that you can access individual characters in a string using bracket notation and an index. The index starts at 0, so gameName[0] returns the first character of the string, which is "A".

console.log(gameName.length); // Output: 5 this is because the length property of a string returns the number of characters in the string, including spaces. In this case, the string "Ahmad" has 5 characters, so gameName.length returns 5.
console.log(gameName.toUpperCase()); // Output: "AHMAD" this is because the toUpperCase() method of a string returns a new string with all characters converted to uppercase. In this case, gameName.toUpperCase() returns "AHMAD".

console.log(gameName.toLowerCase()); // Output: "ahmad" this is because the toLowerCase() method of a string returns a new string with all characters converted to lowercase. In this case, gameName.toLowerCase() returns "ahmad".
console.log(gameName.charAt(2)); // Output: "m" this is because the charAt() method of a string returns the character at the specified index. In this case, gameName.charAt(2) returns the character at index 2, which is "m".
console.log(gameName.indexOf('m')); // Output: 2 this is because the indexOf() method of a string returns the index of the first occurrence of the specified character. In this case, gameName.indexOf('m') returns 2, which is the index of the character 'm'. 

const newString =  gameName.slice(-8, 4)
console.log(newString); // Output: "Ahma" this is because the slice() method of a string returns a new string that is a subset of the original string. The first argument specifies the starting index, and the second argument specifies the ending index (not inclusive). In this case, gameName.slice(-8, 4) returns "Ahma", which is the substring from index -8 to index 4 (not inclusive). Since -8 is out of bounds, it starts from the beginning of the string.

const newString2 = gameName.substring(0, 4)
console.log(newString2); // Output: "Ahma" this is because the substring() method of a string returns a new string that is a subset of the original string. The first argument specifies the starting index, and the second argument specifies the ending index (not inclusive). In this case, gameName.substring(0, 4) returns "Ahma", which is the substring from index 0 to index 4 (not inclusive).

const newStringOne = "   Ahmad   "
console.log(newStringOne); // Output: "   Ahmad   " this is because the string "   Ahmad   " contains leading and trailing whitespace, which is preserved when the string is created. Therefore, when we log newStringOne to the console, it will include the whitespace and output "   Ahmad   ".

console.log(newStringOne.trim()); // Output: "Ahmad" this is because the trim() method of a string returns a new string with leading and trailing whitespace removed. In this case, newStringOne.trim() returns "Ahmad".

const url = "https://www.codewithahmad.com/ahmd%20khan"

console.log(url.replace("%20", "-")); // Output: "https://www.codewithahmad.com/ahmd-khan" this is because the replace() method of a string returns a new string with some or all matches of a pattern replaced by a replacement. In this case, url.replace("%20", "-") replaces the first occurrence of "%20" with "-", resulting in "https://www.codewithahmad.com/ahmd-khan".

console.log(url.includes("codewithahmad")); // Output: true this is because the includes() method of a string returns true if the string contains the specified substring, and false otherwise. In this case, url.includes("codewithahmad") returns true because the substring "codewithahmad" is present in the url string.

