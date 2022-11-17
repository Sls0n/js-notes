// A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // --> A
console.log("B737"[0]); // --> B

console.log(airline.length); // --> 16

console.log(airline.indexOf("r")); // --> 6
console.log(airline.lastIndexOf("r")); // gives the index of last r in the string. --> 10
console.log(airline.indexOf("Portugal")); // --> -1

console.log(airline.slice(4)); // --> Air Portugal (Slices x amount of letters from the beginning) or upto xth index
console.log(airline.slice(4, 7)); // --> Air

// To not hard code
console.log(airline.slice(0, airline.indexOf(" "))); // Prints from 0 index until the first space --> TAP

// --- FOR UPPERCASE AND LOWERCASE ---
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "sIlson";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // --> Silson

// Comparing emails
const email = "hello@silson.com";
const loginEmail = " Hello@Silson.Com \n";

const lowerEmail = loginEmail.toLowerCase();
const removeSpaceEmail = lowerEmail.trim();
console.log(removeSpaceEmail); // --> hello@silson.com

// Replacing certain strings
const priceEuro = "109€";
const priceInDollar = priceEuro.replace("€", "$");
console.log(priceInDollar); // --> 109$

// Only replaces the first occurence (is case sensitive)
const announcement =
	"All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); // --> All passengers come to boarding gate 23. Boarding door 23! (Changed only the first door into gate)

// TO target all the occurence
console.log(announcement.replace(/door/g, "gate")); // --> Also replaceAll()

// ---Booleans---
const plane2 = "A320neo";
console.log(plane.includes("A320")); // --> true
console.log(plane.startsWith("Air")); // --> false
console.log(plane.startsWith("A320")); // --> true
console.log(plane.endsWith("neo")); // --> true

// Some useful application with array
console.log("this+will+make+array".split("+")); // This will split the strings from + making all the words into array --> Array(4) [ "this", "will", "make", "array" ]

const [firstName, lastName] = "Silson Sapkota".split(" ");

const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName);

// Padding
const message = "This is a message";
console.log(message.padStart(25, "-")); // --> --------This is a message
// Similarly .padEnd works

const message2 = "Bad weather";
console.log(message2.repeat(5)); // --> five time repeated
