// Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code

// JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP). Javascript is a prototype based Object oriented language.

// Abstraction, encapsulation, polymorphism, and inheritance are the four main theoretical principles of object-oriented programming.

/////////////////////////////////////////////////
// Creating a constructor function in javascript
const Person = function (firstName, birthYear) {
	// console.log(this); // --> Person {} (Will return empty string)
	this.firstName = firstName; // this.firstName (here firstName doesnt have to be the same name as parameter but its a convention in OOP to use the same [check notes down].)
	this.birthYear = birthYear;
	// These are called instance properties

	// To create method
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// }; // NEVER CREATE METHODS INSIDE CONSTRUCTOR FUNCTION!
};

const silson = new Person("Silson", 2004);
const james = new Person("James, 2001");

console.log(silson); // --> Object { firstName: "Silson", birthYear: 2004 }
/* 
    What happened behind the scenes :-
    1) New Object{} is created
    2) Function is then called, where this = empty object {}
    3) {} linked to prototype
    4) Function automatically returns {}

    Now we can make unlimited names based on that constructor function which server as a blueprint.

    Note: Difference between normal function and constructor function is that constructor function is called using "new"
    Note: (If we did this.Name & this.Year instead of this.firstName & this.birthYear then the output will have Object { Name: "Silson", Year: 2004 })

    Note: In OOP, object created using class are called instances so this make the "silson" & "james" instance of Person.
    Note: We didn't technically create class here though because javascript doesn't have classes like that of traditional OOP. However we created 2 object using constructor function.
*/

// Prototpye
// --> In Javascript, each and every functions automatically has a property called prototype and that includes constructor function. All the objects created using constructor function will inherit & get access to all the methods and properties that are defined on the .prototype property.

Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

silson.calcAge();
james.calcAge(); // Even though the "silson" & "james" object doesn't contain the method in it, it can be accessed or inherited from prototype. All JavaScript objects inherit properties and methods from a prototype.

// Things to keep in mind
console.log(silson.__proto__); // returns the object with calcAge method in it.
console.log(silson.__proto__ === Person.prototype); // true
// .prototype = .prototypeOfLinkedObject (Bad naming)
console.log(Person.prototype.isPrototypeOf(silson)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo Sapiens"; // adding properties (this can't be accessed directly inside silson object but can be accessed inside silson.__proto__).
