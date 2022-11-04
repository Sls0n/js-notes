// A function is a block of code that can be reused.
function logger() {
	console.log("This is a basic function.");
}

// Function Declaration

function calcAge1(birthYear) {
	return 2022 - birthYear;
}

const age1 = calcAge1(2004);

// Function Expression

const calcAge2 = function (birthYear) {
	return 2022 - birthYear;
};

const age2 = calcAge2(2007);

// Arrow Function

const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(2010);

// Printing Output
console.log(age1, age2, age3);

// Higher Order & First Order functions

// A programming language is said to have First-class functions when functions in that language are treated like any other variable.

// Higher order functions are the functions that take other functions as a argument and return functions as the result.

// For eg --> function expressions
// ---(Passing function by argument) callback---
const myName = function () {
	return "Silson Sapkota";
};
const greetName = function (hello, name) {
	console.log(hello + " " + name());
};
greetName("hello", myName);

// ---functions returning functions---
const greet = function (greeting) {
	return function (name2) {
		console.log(`${greeting} ${name2}`);
	};
};
// greet('Hi')('Silson'); // OR
const greeter = greet("Hi"); // Now the "greeter will become the function"
greeter("Silson");

// ---Call, bind and apply method---
const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);

		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};
lufthansa.book(192, "Silson");
lufthansa.book(233, "John");

// Instead of copy pasting this whole book function into another function, we can create a variable with book function to copy it to other for clean code.

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah'); // --> Doesn't work since there is  'this' keyboard used which points to undefined

// Now to explicitly tell javascript what the 'this' keyboard refers to we can use methods of a function called call().

book.call(eurowings, 23, "Sarah"); // Here the first argument is the variable where we want the 'this' keyboard refer to, the second and third arguments are of the book function itself.

// We can also do this with the first object (lufthansa) now.
book.call(lufthansa, 55, "Mark");

// --- NOW APPLY METHOD---
// Apply method is exactly the same as call method but apply doesnt receive arguments after the 'this' keyboard but instead takes the array of arguments.
const flightData = [583, "George"];
book.apply(eurowings, flightData);
// However apply methods are not used nowadays since it can be done with spread operator on call method
book.call(eurowings, ...flightData); // Better than apply() method

// ---NOW BIND METHOD---
// The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(55, "James");
bookLH(35, "Jimmy");
// We can put all the arguments in the .bind() itself but then it woouldnt be reusable anymore.. for eg-->
const bookNotReusable = book.bind(eurowings, 43, "Neesham");
bookNotReusable();

// We can also make only one argument not reusable by passing two arguments
const bookLH22 = book.bind(lufthansa, 22);
bookLH22("Rohit"); // first argument already passed in the function!

// ---Run only once function---
// Enclose the function without variable inside paranthesis and it will work, to call it put a empty paranthesis at last
(function () {
	console.log("It will never run again");
})();

// --- CLOSURES ---
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//  SUMMARY: Closure i s "when you have a function defined inside of another function, that inner function has access to the variables and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible outside of that function."
