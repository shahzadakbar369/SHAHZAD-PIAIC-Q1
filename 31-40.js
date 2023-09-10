"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Task 31 \n");
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ["admin", "Eric", "Alice", "John", "Sara"];
for (let i = 0; i < usernames.length; i++) {
    usernames.splice(0);
}
console.log(usernames);
if (usernames.length == 0) {
    console.log("We need to find some users!");
}
console.log("Task 32 \n");
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Taha", "Wijdan", "Ali", "Amina", "Minahil"];
let new_users = ["Taha", "Haseeb", "Ali", "Saleem", "Ahmad"];
for (let i = 0; i < new_users.length; i++) {
    let isUsernameAvailable = true; // Flag to check if the username is available
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            isUsernameAvailable = false;
            break; // No need to continue checking once a match is found
        }
    }
    if (isUsernameAvailable) {
        console.log(` ${new_users[i]} Username is available!`);
    }
    else {
        console.log(` ${new_users[i]} Please enter a new username!`);
    }
}
console.log("Task 33 \n");
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
        console.log(`${numbers[i]}st`);
    }
    else if (i == 1) {
        console.log(`${numbers[i]}nd`);
    }
    else if (i == 2) {
        console.log(`${numbers[i]}rd`);
    }
    else {
        console.log(`${numbers[i]}th`);
    }
}
console.log("Task 34 \n");
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzas = ["Pepperoni", "Hawaiian", "Margherita"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza!`);
}
console.log("I really enjoy pizza! I like all kinds of pizza, whether it's the classic Margherita, pepperoni, or a veggie-loaded option. The combination of crispy crust, tangy tomato sauce, melty cheese, and various toppings is simply irresistible. Pizza's versatility, endless topping choices, and the joy it brings to gatherings make it a top favorite for me. I really love pizza");
console.log("Task 35 \n");
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let sameAnimal = ["Goat", "Sheep", "Lamb"];
for (let i = 0; i < sameAnimal.length; i++) {
    console.log(sameAnimal[i]);
}
for (let i = 0; i < sameAnimal.length; i++) {
    console.log(`A ${sameAnimal[i]} would make a great pet!`);
}
console.log("Any of these animals would walk!");
console.log("Task 36 \n");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`A "${size}" size shirt with a "${message}"" printed on it!`);
}
make_shirt("S", "WMU");
console.log("Task 37 \n");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`A "${size}" size shirt with "${message}"" printed on it!`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Hello, TypeScript");
console.log("Task 38 \n");
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore", "Pakistan");
describe_city("Mumbai", "India");
console.log("Task 39 \n");
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log("Task 40 \n");
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Artist1", "Album Title 1");
const album2 = makeAlbum("Artist2", "Album Title 2", 12);
const album3 = makeAlbum("Artist3", "Album Title 3");
console.log(album1);
console.log(album2);
console.log(album3);
