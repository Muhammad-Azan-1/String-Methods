
//Equal (==): Checks if two values are equal.

console.log(5 == '5'); // true


// Strict Equal (===): Checks if two values are equal and of the same type.

console.log(5 === '5'); // false  // it checks both value and data types


//Not Equal (!=): Checks if two values are not equal.

console.log(5 != '5'); // false

// Strict Not Equal (!==): Checks if two values are not equal or of different types.

console.log(5 !== "5"); //true  it checks for unequality so data type  of 5 is unequal

// checks either values are  not equal or data types are not equal



// ******************************************************************************************************//

//(primitive Data type  values are stored in) stack memory 

let fullName = "Muhammad Azan";

let newName = fullName  // Here we get copy value of fullName variable inside the newName variable so what ever we change in newName it effects the copy value  of fullName variable does not change anything in original value of fullName Variable 
newName = "Huzaif Ullah"    

console.log(fullName)
console.log(newName); //



 // (Non Primitive Data Types values are stored in) Heap memory

 let user1 = {
     names : "Azan",
     age : 18,

 }

let user2 =  user1  // here we get original value of user1 varaible inside user 2 variable so what ever we change in user2 it effects user1
user2.names = "Huzaif"
console.log(user1.names)
console.log(user2.names)