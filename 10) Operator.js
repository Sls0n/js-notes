// Operators are constructs defined within programming languages which behave generally like functions, but which differ syntactically or semantically.
/*
There are different types of JavaScript operators:

   - Arithmetic Operators
   - Assignment Operators
   - Comparison Operators
   - Logical Operators
   - Conditional Operators
   - Type Operators
*/

// - Assignment Operator (=) assigns a value to a variable:
let a = 10;

// - Arithmetic Operator are used to perform arithmetic on numbers (+, -, *, /, **, %, ++, --)
let b = 5;
let c = 2;
let z = b - c;
console.log(2 ** 3); // This mean 2^3 (2 to the power 3)

// The + operator can also be used to add (concatenate) strings.
let firstName = 'Silson';
let lastName = 'Sapkota';
console.log(firstName + lastName);

/*
- Comparison Operators compares two different numbers
Operator 	Description
1) == 	equal to
2) === 	equal value and equal type
3) != 	not equal
4) !== 	not equal value or not equal type
5) > 	greater than
6) < 	less than
7) >= 	greater than or equal to
8) <= 	less than or equal to
9) ? 	ternary operator
*/

/* 
JavaScript Logical Operators
Operator 	Description
&& 	logical and
|| 	logical or
! 	logical not
*/

//--- Modern Operators ---
// The spread operator(...)

const arr = [7, 8, 9];
// Now suppose we have to insert 1 & 2 in the beginning of arr.
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr); // Output --> [1, 2, 7, 8, 9]

// but with the spread operator it will be easy
const goodArr = [1, 2, ...arr];
console.log(goodArr); // Output --> [1, 2, 7, 8, 9]

// If we have to print every item in goodArr individually then also we can use spread ooperator.
console.log(goodArr); // Output --> [1, 2, 7, 8, 9]
console.log(...goodArr); // Output --> 1 2 7 8 9

// Spread operator works on all iterables i.e arrays, strings, maps, sets. Not objects!
const str = 'Silson';
const fullStr = [...str, ' ', 'S.'];
console.log(fullStr); // Output --> Array(8) [ "S", "i", "l", "s", "o", "n", " ", "S." ]
// The string will be unpacked into array.

// Rest Pattern And Parameters -->
// The syntax of rest pattern is same as spread operator(...)

// Spread operator if its used at right hand side of "=" operator.
const arr2 = [1, 2, ...[3, 4]];

// Rest Pattern in left side of = sign.
const [x, y, ...others] = [1, 2, 3, 4, 5];

// Short Circuiting

// Use any data type, return any data type
console.log(3 || 'Silson'); // Here 3 will be printed in console because if there's no boolean in it then it will automatically print the first truthy value i.e 3 in that example.
console.log('Silson' || 3); // Silson will be printed for the same reason
console.log('' || 4); // Since empty "" is falsy value, 4 will be printed.
console.log(0 || true); // true will be printed.
console.log(1 || true); // 1 will be printed.
console.log(undefined || null); // Here both are falsy value but the last one which got short circuited will be printed.

// in AND && operator its the exact opposite. (Falsy value will be printed and the last element will be printed in case of both true)
console.log('Silson' && 3); // 3 will be printed because AND operator prints the last one.
console.log('' && 4); // Since empty "" is falsy value, it will be printed.
console.log(0 && true); // 0 will be printed.
console.log(1 && true); // true will be printed.
console.log(undefined && null); // Here both are falsy value but the first one which got short circuited will be printed.

// The Nullish Coalescing Operator(??)
// NUllish value --> Null, undefined are the only falsy values (Not 0 or '')
// --> Same as OR operator in short circuiting but falsy values are only nullish values.
console.log(0 ?? true); // Output --> 0

// Logical Assignment Operator
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};

rest2.numGuests = rest2.numGuests ?? 10; //OR rest2.numGuest ||= 10;
console.log(rest2); // Output will have 10 included as numGuests. Object { name: "La piazza", owner: "Giovanni Rossi", numGuests: 10 }
