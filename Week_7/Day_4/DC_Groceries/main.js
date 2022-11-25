let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

let displayGroceries = () => groceries.fruits.forEach((i) => console.log(i));
displayGroceries();

let cloneGroceries = () => {
    let user = client;
    console.log(user);
    client = 'Betty';
    console.log(user); 

    let shopping = groceries;
    console.log(shopping);
    groceries.totalPrice = '35$'; // Changes because it's one object, shopping have a lint to adress where the groceries object is saved;
    groceries.other.payed = false; // Here we change another object, link to which saved in payed variable;
    console.log(shopping);
}

cloneGroceries();