// A Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

const food = new Set(["pasta", "rizotto", "pizza", "pizza"]);
console.log(food); // The duplicate i.e 'Pizza' will be removed.

// To know the length/size of sets.
console.log(food.size); // Output --> 3

// Check if a element exists on a set or not
console.log(food.has("pizza")); // Output --> true
console.log(food.has("bread")); // Output --> false

// To add element in the set
food.add("bread");
console.log(food);

// To remove the element in the set
food.delete("bread");
console.log(food);

// In sets there are no indexes so you can retrieve certain element using its index
console.log(food[0]); // Output --> undefined

// To erase all the elements in the set
food.clear();

// ---EXAMPLE OF THE USECASE OF SETS---
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
const staffUnique = new Set(staff);
console.log(staffUnique);

// TO convert from set to array use spread operator(...)
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);
