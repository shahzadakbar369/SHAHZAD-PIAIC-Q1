console.log("Task 21 \n")
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const earBud1 = {
    name : "Airpods 2", 
    color : "White", 
    talkTime : 8
}

let earBuds : typeof earBud1[] = [];
earBuds.push(earBud1);
earBuds.push({
    name : "Airpods Pro", 
    color : "Orange", 
    talkTime : 10
})
const earBud2 = {
    name : "Pro ANC", 
    color : "Black", 
    talkTime : 15
}
earBuds.push(earBud2);
//console.log(earBuds)

function displayEarbuds(earBuds : Array<typeof earBud1>) {
    for (let i = 0; i < earBuds.length; i++) {
        console.log(earBuds[i]);
        console.log('----------------------------------------------------------------\n')
    }}
    
displayEarbuds(earBuds);


console.log("Task 22 \n")
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

function creatingDSLR(name: string,maker : string, model : any){
    return{
        name : name,
        maker : maker,
        model : model
    }
}
const DSLRs = [
    creatingDSLR("DSLR-1", "Canon", "EOS 5D Mark III"),
    creatingDSLR("DSLR-2", "Nikon", "D5300"),
    creatingDSLR("DSLR-3", "Sony", "Alpha 7")
]
//Intentional Error
const invalidIndex = 10
console.log(`DSLR at index ${invalidIndex}:`, DSLRs[invalidIndex]);

DSLRs.forEach((DSLR) => {
    console.log(DSLR);
})

console.log("Task 23 \n")
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("Task 24 \n")
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array


let car :string = 'subaru';

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'Honda'? I predict False.")
console.log(car == 'Honda')


console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru')

console.log("Is car === 'Subaru'? I predict False.")
console.log(car === 'Subaru')


console.log("Is car !== 'Toyota'? I predict True.")
console.log(car !== 'Toyota')


console.log("Is car !== 'subaru'? I predict False.")
console.log(car !== 'subaru')



console.log("Is car !== 'Toyota'? I predict True.")
console.log(car !== 'Toyota')


console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')

let age : number = 18
console.log("Is age >= 18? I predict True.")
console.log(age >= 18)


console.log("Is age > 18? I predict False.")
console.log(age > 18)


console.log("Is age <= 18? I predict True.")
console.log(age <= 18)


console.log("Is age < 18? I predict False.")
console.log(age < 18)


console.log("Is age < 18 or age = 18? I predict True.")
console.log(age < 18 || age == 18)


console.log("Is age < 18 and age = 18? I predict False.")
console.log(age < 18 && age == 18)


let names : string[] = ["Ali", "Aslam", "Ahmed", "Shabbir", "Ehsaan"]
console.log("Test whether name is in an array")
console.log(names.includes("Ali"))
console.log("Test whether name is not in an array")
console.log(names.includes("Jahanzaib"))
console.log("Test whether name is in a array using AND and OR operators")
console.log(names.includes("Ahmed")&&names.includes("Shabbir")||names.includes("Jahanzaib"))


console.log("Task 25 \n")
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color :string = 'green';

if (alien_color == 'green') {
    console.log("Alien color is green. You just earned 5 points.")
} 
if (alien_color == 'Green') { 
    console.log()
}


console.log("Task 26 \n")
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.

let alien_color2 :string = "yellow";
if (alien_color2 == 'green') {
    console.log("Alien color is green. You just earned 5 points for shooting the alien.")
} else {
    if (alien_color2 !== 'green') {
        console.log("Alien color is not green. You just earned 10 points.")
}}


console.log("Task 27 \n")
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color3 : string = "yellow";
if (alien_color3 == 'green') {
    console.log("Alien color is green. You just earned 5 points")
} else {
    if (alien_color3 == 'yellow') {
        console.log("Alien color is yellow. You just earned 10 points")
    } else {
        if (alien_color3 =='red') {
            console.log("Alien color is red. You just earned 15 points")
        }
    }
}


console.log("Task 28 \n")
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder.

let AGE : number = 18;
if (AGE < 2) {
    console.log("Person is a baby")
} else {
    if (AGE < 4) {
        console.log("Person is a toddler")
    } else {
        if (AGE < 13) {
            console.log("Person is a kid")
        } else {
            if (AGE < 20) {
                console.log("Person is a teenager")
            } else {
                if (AGE < 65) {
                    console.log("Person is an adult")
                } else {
                    if (AGE >= 65) {
                        console.log("Person is an elder")
                    }
                }
            }
        }
    }
}


console.log("Task 29 \n")
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favoriteFruits: string[] = ["bananas", "strawberries", "apples"];

if (favoriteFruits.includes("bananas")) {
    console.log("You really like bananas!");
}

if (favoriteFruits.includes("strawberries")) {
    console.log("You really like strawberries!");
}

if (favoriteFruits.includes("apples")) {
    console.log("You really like apples!");
}

if (favoriteFruits.includes("oranges")) {
    console.log("You really like oranges!");
} else {
    console.log("Oranges are not one of your favorite fruits.");
}

if (favoriteFruits.includes("kiwis")) {
    console.log("You really like kiwis!");
} else {
    console.log("Kiwis are not one of your favorite fruits.");
}


console.log("Task 30 \n")
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const usernames: string[] = ["admin", "Eric", "Alice", "John", "Sara"];

for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
