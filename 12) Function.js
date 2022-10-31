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
// For eg --> function expressions
// (Passing function by argument)
const myName = function () {
	return "Silson Sapkota";
};
const greetName = function (hello, name) {
	console.log(hello + " " + name());
};
greetName("hello", myName);

// functions returning functions
const greet = function (greeting) {
	return function (name2) {
		console.log(`${greeting} ${name2}`);
	};
};
// greet('Hi')('Silson'); // OR
const greeter = greet("Hi"); // Now the "greeter will become the function"
greeter("Silson");
