/***
 * Change below so that it will also compare data types.
 * ```javascript
 * compareEquality(50, 50); // should return "Equal"
 * compareEquality(50, "50"); // should return "Not Equal"
 * ```
 */
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  else {
    return "Not Equal";
  }
}
console.log(compareEquality(50,50));
/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 * ```javascript
 * testStrictNotEqual(17, 17) // should return "Equal"
 * testStrictNotEqual("17", 17) // should return "Not Equal"
 * testStrictNotEqual(12, "bob") // should return "Not Equal"
 * ```
 *
 */

function testStrictNotEqual(a, b) {
  // Only Change Code Below this Line
  if (a !== b) {
    // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(50,5));

/**
 * Given a number "age", return whether or not someone is a teenager
 * This is someone who is between 13 and 19 years old.
 * Use the logical && operator
 */
function isTeenager(age) {
  if (age >= 13 && age <= 19){
    console.log("teenager");
    return true; // Return something here
  }
  else if (age > 19){
    console.log("Not a Teenager(An Adult");
    return false ;
  } 
  else if (age < 13){
    console.log("Not a teenager(A Child");
    return false ;
  }
  else {
    return "error troubling finding your age group";
  }
}
console.log(isTeenager(17));

/**
 * "stringOrNumber" should be true if stringOrNumber is:
 * - a number
 * - a string with numeric characters only (e.g. "5", "1.25", "-4")
 * Use the logical || operator
 * Hint: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
function isNumeric(stringOrNumber) {
  if (Number.isNaN(stringOrNumber) || stringOrNumber) {
    return true;
  }
  else if (isNaN === isNaN ){
    return false;
  }
  else {
    return false;
  }
  // Return something here
}
console.log(isNumeric("5"));
/***
 *  Using conditional logic compare both arguments and return the largest argument
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber;

  return largestNumber;
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  return; // return something here
}

/****
 *  You are given a variable num:
 *  Your task is to print:
- ONE, if num is equal to  1.
- TWO, if num is equal to  2.
- THREE,if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num is equal to 5.
- SIX,  if num is equal to 6.
- SEVEN,if num is equal to 7.
- EIGHT,if num is equal to 8.
- NINE, if num is equal to 9.
 * 
 * PLEASE TRY AGAIN, if  is none of the above
 * 
 *  *****/

function caseInSwitch(num) {}

export {
  isEvenOrOdd,
  compareEquality,
  testStrictNotEqual,
  isTeenager,
  isNumeric,
  getLargerNumber,
  caseInSwitch,
};
