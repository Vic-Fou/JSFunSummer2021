let firstName = "Jimmy";

let lastName = "Jamie Jackson";
console.log(firstName + ' ' + lastName);

console.log(firstName.length)
console.log(firstName.indexOf("J"))


const address = "81 South Fery Street"
const addressShortened = address.substring(0,14)
console.log(addressShortened)
/*.indexOF can be combined with .substring and other code */
let lastNameShortened = lastName.substring(6,13)
console.log(lastNameShortened)

console.log(lastNameShortened +' '+ firstName)


const myString = "i'm typing without autocapitalize"
const word1= myString[0].toUpperCase() + .substring