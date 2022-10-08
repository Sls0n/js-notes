/* 
Semicolons(;) separate JavaScript statements.

Add a semicolon at the end of each executable statement. 
*/

// for eg -->

let a, b, c; // Declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

// When separated by semicolons, multiple statements on one line are allowed ie:
a = 5;
b = 6;
c = a + b;

/* On the web, you might see examples without semicolons.
Ending statements with semicolon is not required, but highly recommended. */

// JavaScript white-spaces.

/* Javascript ignores white spaces just like that of Python. You can add as much white spaces as you want.
However a good practice is to put spaces around operators ( = + - * / )

for eg --> */

let x = "John"; // Recommended (Clean Code)
let y = "John"; // Not clean

// Javascript Code Blocks

/*
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks, is in JavaScript functions. 
for eg --> */

function myFunction() {
	document.getElementById("demo1").innerHTML = "Hello Dolly!";
	document.getElementById("demo2").innerHTML = "How are you?";
}
