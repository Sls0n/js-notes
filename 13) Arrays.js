// An array is a collection of similar data elements stored at contiguous memory locations.

const friends = ["Michael", "Jake", "Sarah"];

// To get the first name only
console.log(friends[0]);

// To find the length of array
console.log(friends.length);

// To find the index of something in array
console.log(friends.indexOf("Jake"));

// To check if array includes something or not
console.log(friends.includes("Jake")); // if its included then it will show true and if its not then false.

// Replacing something in array
friends[1] = "Steven"; // The jake will get replaced to steven.

// Array Methods

friends.push("Peter"); // This add 'Peter' in the array to last place. i.e after 'Sarah'.

friends.unshift("John"); // This adds 'John' at the beginning of the array.

friends.pop(); // This removes merely the last value from array.

friends.shift(); // This removes first value from array.

// Destructuring of arrays
// Destructuring is the act of unpacking elements in an array or object.

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z); // Output --> 1 2 3

// Another example

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const [first, second] = restaurant.categories; // This will only unpack the first two values so the OUTPUT --> Italian Pizzerie

// If we want to skip the second element then put empty element between comma.
const [first2, , third] = restaurant.categories; // This will only unpack the two values but by skipping second so the OUTPUT --> Italian Vegetarian

//Switching variables
[third, first2] = [first2, third];

// TO get the index of array in for of loop use entries() method and destructuring
const array2 = ["One", "Two", "Three", "Four", "Five"];
for (const [i, element] of array2.entries()) {
	console.log(`${i}: ${element}`); // --> 1: One, 2: Two, .... & so on
}

// ---Simple Array Methods---
// slice(start, end)
let arr2 = ["a", "b", "c", "d", "e"];
console.log(arr2.slice(2)); // Just like string slicing i.e starts from 2 ["c", "d", "e"]
console.log(arr2.slice(-1)); // Last element i.e ["e"]

// Splice is same like slice but it mutates the original array. The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// splice(start, howManyItems, optionalToAddThisInArray)
arr2.splice(2); // removes starting from 2nd index --> ["a", "b"]
arr2.splice(2, 1); // removes 1 item from 2nd index --> ["a", "b", "d", "e"]
arr2.splice(1, 2, "Added"); // remove 2 item from 1st index and adds "Added" at last. --> ["a", "Added", "d", "e"]

// We can store the deleted elements by doing this and printing it
const deleted = arr2.splice(2);
console.log(deleted); // --> ["c", "d", "e"];

// Reverse
const reversedArr = arr.reverse();
console.log(reversedArr);

// Concatenation
// The concat() method concatenates (joins) two or more arrays. The concat() method returns a new array, containing the joined arrays. The concat() method does not change the existing arrays.
const arr3 = ["Cecilie", "Lone"];
const arr4 = ["Emil", "Tobias", "Linus"];
const children = arr3.concat(arr4);
console.log(children);

// Join
// The join() method returns an array as a string. The join() method does not change the original array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(); // --> Banana, Orange, Apple, Mango

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let text2 = fruits.join(" and "); // --> Banana and Orange and Apple and Mango

// The new at method
const numbersArr = [1, 2, 3, 4];
console.log(numbersArr[0]); // Traditional Method
console.log(numbersArr.at(0)); // New at Method
// With at method, we can also get the last element in array
console.log(numbersArr.at(-1)); // gives the last element in the array

// ----- forEach() Method -----
// The forEach() method calls a function for each element in an array. This method is not executed for empty elements.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
}
console.log(`-------------forEach()---------------`);

// Now with forEach
movements.forEach(function (movement) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
});
// It has the same output as done previously with for loop!

// Basically what forEach does is this
// Call the function(movement) according to array index
// 1st : function(200)
// 2nd : function(450)
// 3rd : function(-400)
// ...

// To get the index in forEach() method we need to keep in mind that the parameter in the function should be in order like this --> function(elementofArray, currentIndex, entireArray). We can use one, two or three parameter but the order is important. Now with the same example as above -->
movements.forEach(function (movement, i, arr) {
	if (movement > 0) {
		console.log(`${i}: You deposited ${movement}`);
	} else {
		console.log(`${i}: You withdrew ${Math.abs(movement)}`);
	}
});

// ----- Data Tranformations with MAP, FILTER AND REDUCE -----
// Map method is similar to forEach() but the difference is it creates a new array from calling a function for every array element. It maps the value of original array into new array. map() does not change the original array.
// It works exactly the same way as forEach except it returns an array with the return values of every iteration.
// array.map(function(currentValue, index, arr), thisValue)

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
	return num * 10; // Only pushed the return value in new array
}

// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.
const ages = [32, 33, 16, 40];
const result = ages.filter(function (age) {
	return age >= 18;
});

// The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements. The reduce() method does not change the original array.
const array1 = [1, 2, 3, 4];
const sumArray = array1.reduce(function (
	accumulator,
	currentValue,
	Index,
	Array
) {
	// Here it takes accumulator in first
	return accumulator + currentValue;
},
0); // 0 is the initial value
console.log(sumArray);

// expected output: 10

// Find Method
// The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements. The find() method does not change the original array. It has same parameters as map method.
const ages1 = [3, 10, 18, 20];

function checkAge(age) {
	return age > 18;
}

function myFunction() {
	document.getElementById("demo").innerHTML = ages1.find(checkAge);
}

// --- SOME AND EVERY METHOD ---
const nums = [-1, -2, -3, 3];
const anyPositiveNum = nums.some(function (num) {
	return num > 0;
});
console.log(anyPositiveNum); // --> True

// Every method is the opposite. Every elements must meet the condition here
const nums2 = [-1, -2, -3, 3];
const everyPositiveNum = nums.every(function (num) {
	return num > 0;
});
console.log(anyPositiveNum); // --> False

// --- FLAT METHOD ---
const arr5 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // This remove the nested array and flattens the array into one single array i.e --> [1,2,3,4,5,6,7,8] (Only for one level of nesting)
const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2)); // 2 levels

// --- SORT METHOD ---
// Sort method sorts array on the basis of strings. It doesn't sort numbers implicitly.
// It also mutates the original array.
const owners = ["Adam", "Jonas", "Zach", "Martha"];
console.log(owners.sort()); // --> ["Adam", "Jonas", "Martha", "Zach"]

const numUnsorted = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Now if we use sort() it wont be sorted like we have anticipated but to sort it we need to keep in mind this
// return < 0, A, B (Keep Order)
// return > 0, B, A (Switch Order)
numUnsorted.sort((a, b) => {
	if (a > b) return 1;
	if (a < b) return -1;
});

// ASCENDING SORT
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
	return a - b;
});

// DESCENDING SORT
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function (a, b) {
	return b - a;
});

// OTHER WAYS OF CREATING ARRAY
const newArrr = new Array(7, 8, 9);

const emptyArr = new Array(7); // This will create empty array of length 7
emptyArr.fill(1); // --> will fill the empty array of legnth 7 with 1. i.e [1,1,1,1,1,1,1]

// from method
const arrr = Array.from({ length: 7 }, function () {
	return 1;
});
console.log(arrr); // --> Array(7) [ 1, 1, 1, 1, 1, 1, 1 ]

// To put 1 to 7 value in an array
const numberArr = Array.from({ length: 7 }, function (currentElement, index) {
	return index + 1;
});
console.log(numberArr); // --> Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
