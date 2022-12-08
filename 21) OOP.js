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

const silson = new Person('Silson', 2004);
const james = new Person('James, 2001');

console.log(silson); // --> Object { firstName: "Silson", birthYear: 2004 }
/* 
    What happened behind the scenes (new operator) :-
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

// Prototype
// A prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

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

Person.prototype.species = 'Homo Sapiens'; // adding properties (this can't be accessed directly inside silson object but can be accessed inside silson.__proto__).

////////////////////////////////////////
// Now same constructor function but with ES6 classes

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2022 - this.birthYear;
  }

  static hey() {
    console.log('hey');
  }
}

const jessica = new PersonCl('Jessica', 1993);
jessica.calcAge();

// Static method -> Method attached to the constructor itself and not prototype
// for eg -> array.From

Person.hey = function () {
  console.log('hey');
};

Person.hey(); // Can't call it with silson.hey(
// In class its a bit different, see it on class above

//////////////////////////////////////////////////
// Object.create method
const Personprotoo = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(Personprotoo);

///////////////////////////////////////////////////////////////

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

//This code is defining two ES6 classes: PersonCl and StudentCl. The PersonCl class has a constructor that takes in a person's full name and birth year as arguments and assigns them to the properties fullName and birthYear. The PersonCl class also has instance methods that calculate a person's age, greet them, and allow the user to set and get the person's full name. It also has a static method called hey that logs a message to the console. The StudentCl class extends PersonCl, meaning it inherits all the properties and methods of PersonCl. The StudentCl class has its own constructor that takes in the same arguments as PersonCl, but also includes an additional argument for the student's course of study. The StudentCl class also has its own instance methods, introduce and calcAge, that log information specific to the student. An instance of the StudentCl class is then created and its methods are called.
// In this code, the super() function is called in the constructor of the StudentCl class to call the constructor of the parent PersonCl class. This allows the StudentCl class to inherit the properties and methods of the PersonCl class.

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends ParentCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Inhertiance between "Classes" : Object.create

const Personproto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  inti(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const walter = Object.create(Personproto);

const Studentproto = Object.create(Personproto);
Studentproto.init = function (firstName, birthYear, course) {
  Personproto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(Studentproto);
jay.init('Jay', 2005  , 'Computer Science');
