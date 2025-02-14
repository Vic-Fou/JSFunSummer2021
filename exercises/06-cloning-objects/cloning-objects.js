/**
 * Change the value of email property within an object.
 * You should use the spread operator to shallow copy the original object.
 * @param {Object} user
 * e.g. { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" }
 * @param {string} newEmail e.g. "purr@gmail.com"
 *
 * @returns a copy of user, with the email property changed.
 *
 * @example
 * const newUser = changeEmail(
 *    { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" },
 *    "purrfect@gmail.com"
 * );
 * console.log(newUser); // { id: 1234, username: "lolcatz1", email: "purr@gmail.com" }
 *
 * user.email = "icanhascheeseburger@yahoo.com"; // This should not change newUser
 */
const changeEmail = (user, newEmail) => {
    /*//you do not need to write out this, it will be called by the 
    useruser={
        id:5,
        username:"lolcatz1",
        email:"CareBear3000@gmail.com"
    };*/
    const newUserCatalog={...user/*numberOfClients:1*/};
    newUserCatalog.email=newEmail;
    console.log(newUserCatalog);
    return newUserCatalog;
};

/**
 * Add a new item to a shopping cart. You should deep copy any array and objects.
 * @param {Array} shoppingCart an array of objects
 * e.g. [{ name: "TV - 20ft", price: 1000000 }]
 * @param {*} newItem an object to add to the shopping cart array
 * e.g. { name: "Popcorn", price: 5 }
 *
 * @returns the *shoppingCart* array, with the object *newItem* added to it.
 * Both *shoppingCart* and *newItem* should be deep copied.
 *
 * @example
 * const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
 * const newItem = { name: "Popcorn", price: 5 };
 * const newShoppingCart = addToCart(shoppingCart, newItem);
 * console.log(newShoppingCart); // [{ name: "TV - 20ft", price: 1000000 }, { name: "Popcorn", price: 5 }]
 *
 * shoppingCart[0].price = 9000000; // This should not change newShoppingCart
 * newItem.price = 10; // This should not change newItem
 */
const addToCart = (shoppingCart, newItem) => {
    let cart= [
        ...shoppingCart,//array has spread operator
        newItem]
    };
    for(let i = 0; i<cart.length;i++){
        cart[i]{ ...cart[i] };/*loops is the level 2 spread that is */ 
    };
    return cart;

    console.log(cart);
    /*shoppingCart=[{name:"TV - 20ft",price:1000000}];
    newItem={name:"Popcorn",price:5};
    const newShoppingCart=shoppingCart.push(newItem);//[shoppingCart,newItem];
    console.log(newShoppingCart);
    return JSON.parse(JSON.stringify(shoppingCart,newItem));
    //shoppingCart[0].price= 100;
    //newItem.price= 22;*/
    
};

export { changeEmail, addToCart };
