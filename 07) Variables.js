/* 
JavaScript Variables:

    - In a programming language, variables are used to store data values.

    - JavaScript uses the keywords var, let and const to declare variables.

    - An equal sign is used to assign values to variables.

    - In this example, x is defined as a variable. Then, x is assigned the
    value 6.

    For eg -->
    */
let x;
x = 6;

var y;
y = 7;

const pi = 3.14;

let myName = 'John';

var mySurname = 'Doe';

// Difference between Let & Var:

/*- The main difference between let and var is that scope of a variable defined  with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope. */

/* - var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let. An example will clarify the difference even better. */

// Example of Var:

// Input:
console.log(a);
var a = 5;
console.log(a);
/* Output:
      --> undefined
          5 */

// Example of Let:

// Input:
console.log(b);
let b = 5;
console.log(b);
/* Output:
      --> Error */
