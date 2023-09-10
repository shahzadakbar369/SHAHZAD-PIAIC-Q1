console.log("Task 41 \n")
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians : Array<string> = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Criss Angel", "Derren Brown", "David Blaine"]

function show_magicians(magicians: Array<string>) {
    console.log(magicians)
}
show_magicians(magicians);


console.log("Task 42 \n")
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

show_magicians(magicians);

function make_great(magicians: Array<string>) {
    const greatMagicians: Array<string> = [];

    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }

    return greatMagicians;
}
const greatMagicians = make_great(magicians);

show_magicians(greatMagicians);


console.log("Task 43 \n")
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


show_magicians(magicians);
const greatMagicians1 = make_great([...magicians]);
show_magicians(greatMagicians1);


console.log("Task 44 \n")
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some ingredients.");
    } else {
        console.log("Here's your sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
}

// Call the function with different sandwich orders
makeSandwich("Chicken", "Cheese", "Lettuce", "Olives");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich();


console.log("Task 45 \n")
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; // Allow arbitrary key-value pairs
}

function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model,
    };

    for (const [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional details
const myCar: Car = createCar("Toyota", "Camry", ["color", "Blue"], ["year", "2023"],["price", "10,000,000"]);

// Print the car object
console.log(myCar);
