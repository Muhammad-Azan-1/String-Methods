//TO create string

let myName = "Muhammad Azan"
console.log(myName.length) // Muhammad Azan

//Or

let fullName = new String("Azan")   // By this method you got a string object , string {'Azan'}
                                    //because new keyword use to creates a object
 console.log(fullName) //string {'Azan'}


// lets understand some string methods (Note: all string methods do not change the original string)

let string = "I love javascript"

//1) convert each element of string to upper case

console.log(string.toUpperCase()) // I LOVE JAVASCRIPT

//2) convert each element of string to lower case

console.log(string.toLowerCase()) // i love javascript

//3) replace a word in string

let url = "http://azan.com//Muhammad%20Azan"
console.log(url.replace("%20", "-")) // I love python

//4) Get the length of the string

console.log(string.length) // 17

//5) TO find the index of a character Note:(it always the return the index of first element if there is another 'o' then it will ignore it)

console.log(string.indexOf("a")) // 8    if no index is found both return -1

//6) TO find the Last index of a character Note:(it always the return the index of last element)

console.log(string.lastIndexOf("a")) // 10

//7) Check if a string contains a particular word or not

console.log(string.includes("javascript")) // true
console.log(string.includes("Azan")) // false

//8) TO convert an string into an arry based on a separator 

let newString = "I-Love-Typescipt-Javascript"
console.log(newString.split("-"))  // where the split find - separator it converts the string into an arry

//9) To find the character of any string through index

console.log(string.charAt(0)) // I
//or
console.log(string[0]) // I


//10) To remove whitespace from a string

let stringForTrim  = "      Hello World!     "
console.log(stringForTrim.trim()) // Hello World!
console.log(stringForTrim.trimEnd()) //      Hello World!
console.log(stringForTrim.trimStart()) // Hello wordl!


//11) To get a part to string

let str = "hello";
console.log(str.slice(1, 3));    // Output: "el" // give all elements from1 to 2 and ignores 3 the end index
console.log(str.slice(3, 1));    // Output: "" (does not swap arguments) // When bigger numbers come first slice become confused
console.log(str.slice(2));       // Output: "llo" // give all elements from 2 to onwards
console.log(str.slice(-4, -1));  // Output: "ell" (supports negative indices)

// Same thing by substring method, 

console.log(str.substring(1, 3)); // Output: "el" give all elements from1 to 2 and ignores 3 the end index
console.log(str.substring(3, 1)); // Output: "el" (swaps arguments) when bigger numbers come first substring reverse the order the return the part of the string in our case (str.substring(3,1) => str.substring(1, 3)
console.log(str.substring(2));    // Output: "llo" // give all elements from 2 to onwards


