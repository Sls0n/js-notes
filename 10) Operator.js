// - +

// for power use **

console.log(2 ** 3); // This mean 2^3 (2 to the power 3)

let firstName = "Silson";
let lastName = "Sapkota";

console.log(firstName + lastName);

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
