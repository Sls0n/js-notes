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
