/**
 * Make an object "myDog" that represents a dog. It should contain the properties:
 * "name", "legs", "tails" and "owners".
 * Each should have a value.
 * "owners" should be an array with a list of owner names.
 * @return {object}
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
  main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
const createDogObject = () => {
    const myDoge = {
    "name": "Sparky",
    "legs":"3",
    "tails":"1",
    "owners":["Stephen","Marcus","Sergei"]
  };
  return myDoge;
};

<<<<<<< HEAD
=======
const createDogObject = () => {};
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

const createDogObject = () => {};
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

/**
 *  CreateGraduateObject function takes in several arguments and combines them together in one object.
 *
 * @param {string} name
 * @param {number} graduationYear
 * @param {array} skills
 * @param {string} githubLink
 * @param {string} linkedInLink
 *
 * @returns {Object} with the properties "name", "graduationYear", "skills" and "links".
 * "links" should be an object with the properties "github" and "linkedIn".
 *
 * @example
 * const graduateObject = createGraduateObject("Eddie Willard", 2020, [ "Javascript", "React", "CSS" ], "https://github.com/example/profile", "https://linkedin.com/profile");
 *
 * console.log(graduateObject); //
 * {
 *   name: "Eddie Willard",
 *   graduationYear: 2021,
 *   skills: ["JavaScript", "React", "CSS"],
 *   links: {
 *     github: "https://github.com/example/profile",
 *     linkedIn: "https://linkedin.com/profile"
 *   }
 * }
 */

const createGraduateObject = (
  name,
  graduationYear,
  skills,
  githubLink,
  linkedInLink
<<<<<<< HEAD
<<<<<<< HEAD
=======
  main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
) => { 
  const gradObject={
    name:name,
    graduationYear:graduationYear,
    skills: skills,
    links: {
      github:githubLink,
      linkedIn:linkedInLink
    }
    //property keys will not be remembered by the entire function, so set the property value as the parameter in your new obj
  };
  return gradObject;
 
};
<<<<<<< HEAD
=======
) => {};
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

) => {};
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

/**
 * Return the value for hat inside of the clothes object
 * @return {string} ballcap
 * @example accessAnItemObject(); // ballcap
 */

const accessAnItemObject = () => {
  // Do not change clothes here
  let clothes = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats",
  };
<<<<<<< HEAD
<<<<<<< HEAD
  return clothes['hat'];// Write code here
=======
  // Write code here
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======
  main
  return clothes['hat'];// Write code here

  // Write code here
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
};

/**
 * Update the object to contain your first and last name.
 * Add at least three skills inside the array
 * @return {object} student
 * @example updateStudentObject()
   // {
    firstName: "Jamal",
    lastName: "Taylor",
    skills: ["JavaScript", "Teaching", "Being a permanent student"],
  }
 */

const updateStudentObject = () => {
  // Do not change student here
  let student = {
    firstName: "",
    lastName: "",
    skills: [],
  };
  // Write code here
<<<<<<< HEAD
<<<<<<< HEAD
=======
  main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
  student["firstName"]='Victorious';
  student["lastName"]='Foulks';
  student["skills"]=["JavaScript","CSS","HTML"];
  return student;
<<<<<<< HEAD
=======
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
};

/**
 * Using Object.keys, return all the properties contained in the object.
 * @return {array}
 * @example returnObjectValues(); // [1, 4, "Stacy", "Rocket"]
 */

const returnObjectValues = () => {
  // Do not change dog here
  let dog = {
    tail: 1,
    legs: 4,
    owner: "Stacy",
    name: "Rocket",
  };
<<<<<<< HEAD
<<<<<<< HEAD
  let dogSets = Object.values(dog);// Add code here
  return dogSets;
=======
  // Add code here
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======
  main
  let dogSets = Object.values(dog);// Add code here
  return dogSets;

  // Add code here
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
  // HINT: you need to return an array
};

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 * @example
 * const obj1 = { firstName: "Clark" }
 * const obj2 = { lastName: "Kent" }
 * combineObject(obj1, obj2); // { firstName: "Clark", lastName: "Kent" }
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
  main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec
const combineObject = (obj1, obj2) => {
  const object1= {
    firstName:'Clark'
  };
  const object2={
    lastName:'Kent'
  };
  const bothObjects = {
    firstName:object1.firstName,//...object1,
    lastName:object2.lastName//...object2,

  };
  return bothObjects;
};
<<<<<<< HEAD
=======
const combineObject = (obj1, obj2) => {};
>>>>>>> 4a14425e3b01fc5ab276d18435e3e7bcc9c82a6a
=======

const combineObject = (obj1, obj2) => {};
 main
>>>>>>> c72d2c8d74ac25ad4531b4d9b047305caebc71ec

export {
  createDogObject,
  createGraduateObject,
  updateStudentObject,
  returnObjectValues,
  accessAnItemObject,
  combineObject,
};
