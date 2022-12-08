// JavaScript Numbers are Always 64-bit Floating Point. Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

// So
console.log(23 === 23.0); // --> True
console.log(0.1 + 0.2); // --> 0.30000000000000004 (Weird feature of JS)
console.log(0.1 + 0.2 === 0.3); // --> False (because of the former reason)

// For conversion
console.log(Number('23'));
console.log(+'23');

// For parsing
console.log(Number.parseInt('30px', 10)); // --> 30 (putting 10 to convert it to base 10 always do it to avoid error)
console.log(Number.parseInt('px30', 10)); // --> NaN (Needs to start from number)
// For floats we need to
console.log(Number.parseFloat('2.5rem')); // --> 2.5

// To check if the number is finite (best way to check if a value is number or not)
console.log(Number.isFinite(2)); // --> True
console.log(Number.isFinite('2')); // --> False

console.log(Number.isInteger(2)); // --> True
console.log(Number.isInteger(2.0)); // --> True

// Math methods
console.log(Math.PI);

console.log(Math.round(4.6)); //--> 5 (Upto 4.5 it returns 4, from 4.51 it returns 5)
console.log(Math.trunc(4.6)); // --> 4 (returns only the integer)
console.log(Math.ceil(4.1)); // --> 5 (always rounds up the number)
console.log(Math.floor(4.9)); // --> 4 (always rounds down the number)
console.log(Math.abs(-4.7)); // --> 4.7 (returns absolute value)

console.log(Math.random()); // --> returns random number from 0 to 1
console.log(Math.random() * 10); // -->  returns random number upto 9, and can do + 1 at last to make it upto 10.

// Numeric Separators
// It might be hard to know whether the number's in million or billion if there's no comma
const billion = 1000000000;
// It would be readable if it was 1,000,000,000
const billionWComma = 1_000_000_000; // (We can use _ instead of comma, JS engine will ignore _)

// Big Int (represents 64bits)
console.log(2 ** 53 - 1); // Biggest number JS can safely implement
console.log(Number.MAX_SAFE_INTEGER); // --> 9007199254740991

console.log(12412512352315325235623623623623626236236n); // use "n" at last to make it BIGINT OR,
console.log(BigInt(234124124));

// SetTimeOut and SetTimeInterval
// 1 sec = 1000(ms)
setTimeout(
  () => console.log('This will be printed after 10 seconds 😏'),
  10000
);

// To use arguments in setTimeout we need to do like this.
setTimeout(
  (veg1, veg2) => console.log(`The vegetables are ${veg1} & ${veg2}`),
  5000,
  'Spinach',
  'Brocolli'
);

// Clear timeout
const vegs = ['Spinach', 'Brocolli'];
const vegTimer = setTimeout(
  (veg1, veg2) => console.log(`The vegetables are ${veg1} & ${veg2}`),
  5000,
  ...vegs
);

if (vegs.includes('Spinach')) {
  clearTimeout(vegTimer);
} // --> It wont print in console

// settimeout prints only once after the set time period whereas setinterval prints every time the time passes by
setInterval(
  (veg1, veg2) => console.log(`The vegetables are ${veg1} & ${veg2}`),
  5000,
  'Spinach',
  'Brocolli'
); // This will print every 5 second.

// clearInterval does the same as clearTimeout
