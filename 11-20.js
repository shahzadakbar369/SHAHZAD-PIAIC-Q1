"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Task 11 \n");
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendName = ['Taha', 'Wijdan', 'Ali', 'Shoaib'];
for (let i = 0; i < friendName.length; i++) {
    console.log(friendName[i]);
}
console.log("Task 12 \n");
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let i = 0; i < friendName.length; i++) {
    console.log("Hello Mr. " + friendName[i] + ". Hope, you will be doing good!");
}
console.log("Task 13 \n");
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransportation = [];
//: Array<[vehicle : string, maker : string]> 
favoriteTransportation.push(["Motorcyle", "Benelli"]);
favoriteTransportation.push(["Car", "Audi"]);
favoriteTransportation.push(["Bus", "Volvo"]);
favoriteTransportation.push(["Truck", "MAN"]);
favoriteTransportation.forEach(([vehicle, maker]) => {
    console.log("I would like to own a " + maker + " " + vehicle);
});
console.log("Task 14 \n");
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList1 = ['Taha', 'Wijdan', 'Ali', 'Shoaib'];
guestList1.forEach((guestList1) => {
    console.log(`Hey Mr. ${guestList1}, you are cordially invited at the ceremony. Please join us!`);
});
console.log("Task 15 \n");
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for each person who is still in your list.
let guestList2 = ['Taha', 'Wijdan', 'Ali', 'Shoaib',];
let cantMake = 'Shoaib';
console.log(cantMake + " can’t make the dinner");
let newGuest = 'Abdullah';
let indexofcantMake = guestList2.indexOf(cantMake);
guestList2[indexofcantMake] = newGuest;
// console.log("Hey Mr. " + guestList2[5] + ", you are cordially invited at the ceremony. Please join us!")
guestList2.forEach((guestList2) => {
    console.log(`Hey Mr. ${guestList2}, you are cordially invited at the ceremony. Please join us!`);
});
console.log("Task 16 \n");
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. 
//Use append() to add one new guest to the end of your list. 
//Print a new set of invitation messages, one for each person in your list.
let guestList3 = ['Wijdan', 'Ali', 'Shoaib',];
console.log(`Hello we found ${guestList3} on the bigger table`);
guestList3.unshift('Shahid');
console.log(guestList3);
guestList3.splice(2, 0, 'Shahzad');
console.log(guestList3);
guestList3.push('Waleed');
console.log(guestList3);
guestList3.forEach((guestList3) => {
    console.log(`Hey Mr. ${guestList3}, you are cordially invited at the ceremony. Please join us!`);
});
console.log("Task 17 \n");
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log('I can invite only two people for dinner.');
while (guestList3.length > 2) {
    let removeGuest = guestList3.pop();
    console.log('sorry ' + removeGuest + ' you can’t invite them to dinner.');
}
console.log(guestList3);
guestList3.forEach((guestList3) => {
    console.log(`Hey Mr. ${guestList3}, despite we ran out of dinner table, you are still invited at the ceremony. Please join us!`);
});
guestList3.splice(0, 2);
console.log(guestList3);
console.log("guestList3 is emptied");
console.log("Task 18 \n");
// Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let likeToVisit = ["Saudia", "UAE", "Thailand", "Missisipi", "London", "Turkey"];
console.log("Original order");
console.log(likeToVisit);
console.log("Alphabetic order");
console.log([...likeToVisit].sort());
console.log("Original order");
console.log(likeToVisit);
console.log("Reverse alphabetic order");
console.log([...likeToVisit].sort().reverse());
console.log("Original order");
console.log(likeToVisit);
console.log("Reversing 2 time it's order to see if it relates to orignal");
let reversedArr1 = [...likeToVisit].reverse();
let reversedArr2 = [...reversedArr1].reverse();
console.log(reversedArr2);
console.log("Alphabetical order");
console.log([...likeToVisit].sort());
console.log("Reverse Alphabetical order");
console.log([...likeToVisit].sort().reverse());
console.log("Task 19 \n");
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`We are finally inviting ${guestList3.length} persons in our ceremony!!`);
console.log("Task 20 \n");
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries = ["Saudia", "UAE", "Thailand", "Missisipi", "London", "Turkey"];
for (let country of countries)
    console.log(country);
