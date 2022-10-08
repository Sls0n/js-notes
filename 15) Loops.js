// A loop is a sequence of instruction s that is continually repeated until a certain condition is reached.

// for example instead of writing
console.log("1");
console.log("2");
console.log("3");
console.log("4");

// We can automate it with loop. This is with for loop.
for (let i = 1; i <= 4; i++) {
	console.log(i);
}

// Same can be implemented with while loop! The thing which can be implemented with for loop can also be implemented with any other loop.
let j = 1;
while (j <= 4) {
	console.log(j);
	j++;
}

// Looping through arrays
const silsonArr = ["Silson", 18, "Software Engineer"];
for (let i = 0; i <= silsonArr.length - 1; i++) {
	console.log(silsonArr[i]);
}

// Looping through arrays and storing value in another empty array
const years = [1991, 2004, 2007, 2017, 1945];
const age = [];

for (let i = 0; i <= years.length - 1; i++) {
	age.push(2022 - years[i]);
}

console.log(age);

// continue and break statement
const randomArray = [1991, "Silson", 2004, 2007, 2017, 1945];
for (let i = 0; i < 5; i++) {
	if (typeof randomArray[i] !== "number") continue;
	console.log(randomArray[i], typeof randomArray[i]);
}

const randomArray2 = [1991, "Silson", 2004, 2007, 2017, 1945];
for (let i = 0; i < 5; i++) {
	if (typeof randomArray2[i] === "string") break;
	console.log(randomArray2[i], typeof randomArray2[i]);
}

// Continue --> Terminates current operation only
// Break --> Terminates the whole operation.

// Backwards Looping in array
const randomArray3 = ["LOL", 1991, "Silson", 2004, 2007, 2017, 1945];
for (let i = randomArray3.length - 1; i >= 0; i--) {
	console.log(randomArray3[i], typeof randomArray3[i]);
}

// Loop inside loop
for (let loop = 1; loop <= 5; loop++) {
	console.log(`----This is the main loop number ${loop}!`);

	for (let insideLoop = 1; insideLoop <= 3; insideLoop++) {
		console.log(`This is loop inside of loop number ${insideLoop}`);
	}
}
