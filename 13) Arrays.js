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
