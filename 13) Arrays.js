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
