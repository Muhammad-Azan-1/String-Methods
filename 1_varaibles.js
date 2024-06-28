
const accountId = 12345244
let accountEmail = "Azan@gmail.com"
var accountPassword = "1234"
accountCity = "karachi"
let accountState;



//accountId = 3222 //  varaible decleare with const can neither be update nor be redcleared


// let accountEmail = "Azaan1234@gmail.com" // varaible decleare with let be updated but neither be redcleared
accountEmail = "Azaan1234@gmail.com" 


accountPassword = "278994" // varaible decleare with var can be updated and redcleared => let accountPassword = "278994" it is also ok
/*
 prefer not to use var because of issue in block scope  and functional scope
 
*/

accountCity = "Lahore"


console.table([accountId, accountEmail, accountPassword, accountCity,accountState])