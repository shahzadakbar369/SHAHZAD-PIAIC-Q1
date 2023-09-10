"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Task 1 \n");
//Install Node.js, TypeScript and VS Code on your computer.
// installed Successfuly
console.log("Task 2 \n");
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log("Hello" + personName + ", would you like to learn some Python today?");
console.log("Task 3 \n");
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let lowercase = personName.toLowerCase();
console.log(lowercase);
let UPPERCASE = personName.toUpperCase();
console.log(UPPERCASE);
let titlecase = " ";
let words = personName.split(" ");
for (let i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}
console.log(titlecase);
console.log("Task 4 \n");
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
console.log("Task 5 \n");
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Albert Einstein";
let hisMessage = ' once said, “A person who never made a mistake never tried anything new.”';
console.log(famousPerson + hisMessage);
console.log("Task 6 \n");
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let Pname = "\t Shahzad Akbar \n";
console.log("Whitespaced name is", Pname, ".");
let StrippedName = Pname.trim();
console.log("Stripped name is", StrippedName, ".");
console.log("Task 7 \n");
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//addition
console.log(5 + 3);
//subtraction
console.log(10 - 2);
//multiplication
console.log(4 * 2);
//division
console.log(32 / 4);
console.log("Task 8 \n");
// You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log("-".repeat(88));
//addition
console.log(5 + 3);
console.log("-".repeat(88));
//subtraction
console.log(10 - 2);
console.log("-".repeat(88));
//multiplication
console.log(4 * 2);
console.log("-".repeat(88));
//division
console.log(32 / 4);
console.log("-".repeat(88));
console.log("Task 9 \n");
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const favNumber = 10;
let Message = `My favourite number is ${favNumber}`;
console.log(Message);
console.log("Task 10 \n");
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
/*let lowercase : string = personName.toLowerCase();
console.log(lowercase)

let UPPERCASE : string = personName.toUpperCase();
console.log(UPPERCASE)

let titlecase : string = " "
let words : string[] = personName.split(" ");
*/
// this was block level comment
//for(let i=0; i<words.length; i++){
//    titlecase += words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase();
//}
//console.log(titlecase);
//this was line commenting
console.log("comments have been added");
