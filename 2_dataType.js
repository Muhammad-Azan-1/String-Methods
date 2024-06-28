"use strict"; // treat all js code as a newer version

// alert(3+3) // here we are using node.js not browser in node.js alert has a different syntax



// There are 7 primitive data types in js

//string

let names = "Muhammad Azan";
console.log(names)


//number

let number  = 123445  // in JavaScript number data type has a limit of  2 to power 53 
console.log(number)


//boolean

let isActive = true;  // boolean value can be true/false
console.log(isActive)



//BigInt  

let bigNumber = 123445298438758475577575757575757575775757575757575775n  //  bigInt data type use to store bigger numbers
console.log(bigNumber)


//undefined 

let myName;
console.log(myName)  // undefined means no value is assigned



//null is the representation of a empty value it is itself a standalone value

let x = null;
console.log(x)



//symbol  are used for uniquenes

let sym1 = Symbol();
let sym2 = Symbol()            // Symbols are unique and immutable, primarily used as unique identifiers for object properties,
console.log(sym1 ===sym2)       // here both symbols are same but as we equal then console gives false so each symbol is always unique




//Non Primitive data types

//object


console.log(typeof undefined) // undefined)
console.log(typeof null) // object

