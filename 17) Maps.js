// Map is a collection of elements where each element is stored as a Key, value pair. The difference between Object & Maps is in Maps it can have any type of keys but in Object keys are always string.

// Create a Map
const fruits = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(fruits);

// Another method
const restaurant = new Map();
restaurant.set("name", "Classic Italiano"); // (key, value)
restaurant.set(1, "Firenze, Italy");

// We can also do this
restaurant
	.set("categories", ["Italian", "Japanese", "Nepalese", "Indian"])
	.set("open", 11)
	.set("close", 23)
	.set(true, "We are open");
console.log(restaurant);

// To get a single value of key use get()
console.log(restaurant.get("open")); // --> 11
console.log(restaurant.get(1)); // --> "Firenze, Italy"

// To remove the element in the map, delete with the key inside bracket
restaurant.delete("categories");
console.log(restaurant);

// Check if a element exists on a map or not. Also based on key
console.log(restaurant.has("categories")); // Output --> true
console.log(restaurant.has("firstName")); // Output --> false

// To know the length/size of the map.
console.log(restaurant.size);

// To erase all the elements in the set
restaurant.clear();

// forEach() in a map. It's in the form of (value, key, map)
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
