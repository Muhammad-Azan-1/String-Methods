// Primitive Data Types

// type: String, nymber, boolean, undefined, null, bigint, symbol,

let fullName = "Muhammad Azan"

let password = 12345

let isActive = true

let isloggedIn;

let temperature = null;

let id = Symbol('123')
let anotherId = Symbol('123')     //symbol is use to make any varaible unique it is used for uniqueness

console.log(id === anotherId)



let bigint = 13823477347343864764714316463764n   // bigint is used for big numbers


// Reference (Non Primitive Data Types)

// Arry Object Function

let Names = ["Azan","Huzaif","Anus"]

let myObject = {
    name: "Azan",
    age: 20,
    isActive: true
}

function myFunc(){
    console.log("Hello")
}

myFunc()