
let score = false;

console.log(typeof score)

let ToNumber = Number(score);  // this method is use to convert any data type into a number,string,boolean etc 
console.log(ToNumber)
console.log(typeof ToNumber)


// conversion  from string to number "33" => 33

// conversion from string to number "33abc" => NaN   note:(type of NaN is also number)

// conversion from undefined to number undefined => NaN

// conversion from null to number => 0

// coversion from boolean to number true => 1  / false => 0




let isloggedIn = undefined

console.log(typeof isloggedIn)

let ToBoolean = Boolean(isloggedIn)
console.log(ToBoolean)
console.log(typeof ToBoolean)



// conversion  from any number other then 0 to boolean  1,2,3 any number => true 
// converion from 0 to boolen 0 => false
// conversion of Empty string  boolen "" => false
// conversion from string to boolean "Azan" => true




let number =  33
console.log(typeof number)

let ToString = String(number)

console.log(ToString)

console.log(typeof ToString)

//conversion from number to string 33 => '33'




// ******************************** Operations ********************************//

    let value = 3
    let negValue = -value
    console.log(negValue)


    console.log(2+2)
    console.log(2-2)
    console.log(2*2)
    console.log(2/2)
    console.log(10%5)



    let str1 = "hello"
    let str2 = " Azan"

    let str3 = str1 + str2
    console.log(str3)



    console.log("1" + 2)
    console.log(1 + "2")
    console.log("1" + 2 + 2)    // 122
    console.log(1 + 2 + "2")   // 32

    console.log(+true)  // 1
    console.log(+"")   // 0
    console.log(+false) // 0
    


    let gameCounter = 100
     console.log(gameCounter++); // 100 because post increment first assign value then increment
     console.log(gameCounter) // 101


     
     let gameCounter2 = 100
     ++gameCounter2; // 101 pre increment directly increments  the value
     console.log(gameCounter2) //101
