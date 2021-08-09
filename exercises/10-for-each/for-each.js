/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */
const forEach = (arr, callback) => {
    return forEach(`${callback+1}.${arr}`);
};
/*const forEachStudent =(studentNames,apple) =>{
    studentNames= [""];
    let foodShare= studentNames.forEach(`${apple}`);
    console.log(foodShare);
    return foodShare;

};*/
//forEachStudent(["Dan"]);
/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
const showFirstAndLast = (arr) => {

           //for (let i=0;i<arr.length;i++){
        arr.forEach((arr,i)=>{
           let newArray=arr[i].split('')[0]+arr[i].split();
           console.log(newArray);
           return newArray;
        
    });
    return arr;
};
showFirstAndLast(["Dan","Tim","Matthew"]);
export { forEach, showFirstAndLast };
