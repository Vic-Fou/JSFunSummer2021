/**
 *  Return the first item in an array of cars
 *  @return {string} BMW
 */

const accessingAnItem = () => {
  const cars = ["BMW", "Honda", "Civic"]; // Do not change this line
<<<<<<< HEAD
<<<<<<< HEAD
  return cars[0];// Write code here
=======
  // Write code here
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======
 main
  return cars[0];// Write code here

  //  main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
};

/**
 * Add three more programming languages and return the languages array
 * @return {array} an array with four items
 * @example addToAnArray() // ["JavaScript", "Python", "Java", "PHP"]
 */

const addToAnArray = () => {
  const languages = ["JavaScript"]; // Do not change this line

<<<<<<< HEAD
<<<<<<< HEAD
=======
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
  languages.push("HTML","CSS","Python");/* Add three more items to the "languages" array here */

  return languages;
};
console.log(addToAnArray());

<<<<<<< HEAD
=======
=======

>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
  /* Add three more items to the "languages" array here */

  return languages;
};
<<<<<<< HEAD
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

/**
 * Combine an array by using the spread operator
 * @param {array} array1
 * @param {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

<<<<<<< HEAD
<<<<<<< HEAD
=======
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
const combineArray = (array1, array2) => {
  const combinedArray = [...array1,...array2];
  return combinedArray;
};
console.log(combineArray(["Brazil","Mexico","Chile"],["Venezuela","Peru","Uruguay"]));
<<<<<<< HEAD
=======
const combineArray = (array1, array2) => {};
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

const combineArray = (array1, array2) => {};
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

/***
 * Create an array that contain two functions:
 * 1) the first function should add two arguments
 * 2) the second function should subtract two arguments
 * @returns {array} an array of functions
 *
 * @example createArrayOfFunctions()[0](10, 10) // 20;
 * @example createArrayOfFunctions()[1](10, 10) // 0;
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
const createArrayOfFunctions = () =>{
  let functionsArray= []; 
  /*anonymous functions ->*/
  function Addfunction(m,n){
    return m+n;
  }
  function SubstractFunction(x,y){
    return x-y;
  }
  functionsArray.push(Addfunction);
  functionsArray.push(SubstractFunction);
  /* review array.push*/
  console.log(functionsArray[0](10,10));
  console.log(functionsArray[1](19,18));
  return functionsArray;
};
console.log(createArrayOfFunctions());
<<<<<<< HEAD
=======
const createArrayOfFunctions = () => {};
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

const createArrayOfFunctions = () => {};
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
<<<<<<< HEAD
<<<<<<< HEAD
=======
  main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
 **/

const highestNumber = (numbers) =>{
  numbers=[1,10,2,4,6,7,8,9,-1,10,-20];
  let numberList=numbers.length;
  for(let i=0;i<numberList;i++){
    console.log(i);
  }
  return numberList;
  /*for(let numberListIndex=0;numberListIndex<numbers.indexOf();numberListIndex++){
  for(let subOfNumberList=0;subOfNumberList<numbers.numberListIndex.length();subOfNumberList++){
  if(numbers[numberListIndex][subOfNumberList]>numberList){
    numberList[numberListIndex]=numbers[numberListIndex][subOfNumberList];
    console.log(numberList);
    }
    else{
      console.log("cannot obtain highest number");
    } 
  }
}
  return numberList;*/
};
console.log(highestNumber());
<<<<<<< HEAD
=======
 *
 **/
const highestNumber = (numbers) => {};
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

 *
 **/
const highestNumber = (numbers) => {};
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

/**
 * Given an array of objects, where each object has an ID,
 * loop through an array using a for loop (or for ... of loop).
 * Return the object that matches a given ID.
 *
 * Once the object is found, you must break out of the loop for optimization purposes.
 * To Pass this challenge, break must be used.
 *
 * @param  {array} arr
 * @param  {number} id
 * @returns {object} with the matching id
 *
 * @example
 * const people = [{
 *    id: 10,
 *    firstName: 'John',
 *    lastName: 'Smith'
 * },{
 *    id: 20,
 *    firstName: 'Cookie',
 *    lastName: 'Monster'
 * },{
 *    id: 30,
 *    firstName: 'Jane',
 *    lastName: 'Doe'
 * }
 * },{
 *    id: 40,
 *    firstName: 'Tom',
 *    lastName: 'Hardy'
 * }];
 * findAndAbort(people, 20); // { id: 20, firstName: 'Cookie', lastName: 'Monster' }
 *
 * Please note, the loop never iterates over the last item, because we found our object. There is no need to continue looping.
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
  main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
const findAndAbort = (arr, id) => {
  let foundItem;
  for (let i=0; i< arr.length; i++){
    let person=arr[i];
    if(person.id === id){
      console.log(foundItem);
    }
  }
  /*break stops the loop*/
  return foundItem;
};
<<<<<<< HEAD
=======
const findAndAbort = (arr, id) => {};
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

const findAndAbort = (arr, id) => {};
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @return {Boolean}
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
const isPalindrome = (str) => {;
let letters= str.split("");
let reverseStr="";
console.log(letters);
for (let i=0; i< letters.length;i++){
  console.log(letters[i]);
  reverseStr= letters[i] + reverseStr;
}
};
console.log(isPalindrome("racecar"));
<<<<<<< HEAD
=======
const isPalindrome = (str) => {};

>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

const isPalindrome = (str) => {};

 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
/**
 * Use sets to remove duplicate elements from an array
 * @return {array} of numbers
 * @example
 * const array = [
    2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5,
  ];
 * removeDuplicates(); // [2, 3, 4, 5, 6, 7, 32]
 */

const removeDuplicates = (numbers) => {};

export {
  addToAnArray,
  accessingAnItem,
  highestNumber,
  isPalindrome,
  combineArray,
  removeDuplicates,
  createArrayOfFunctions,
  findAndAbort,
};
