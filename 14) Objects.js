// Objects are another important data structure of javascript.

const silson = {
    firstName: 'Silson',
    lastName: 'Sapkota',
    age: 18,
    company: ['ABC Company', 'XYZ Company']
}

// In array we access elements by using its index number. But in objects we access it by using keys and values.
// The firstName is called key which has 'Silson' as a value in line:4.

// To access object 

console.log(silson.lastName);
console.log(silson['lastName']);

// To add more 

silson.location = 'Nepal';
silson['twitter'] = 'xSls0n_007';


// Using function expressions inside Object (Only function expression will work). Any Function that is attached to the object is called method. Then we can call the function.
const job = {
    salary: 20000,
    YOE: 4,
    birthYear: '2004',
    degree: 'Bachelors Degree',

    /* calcAge: function(birthYear) {
         return 2022 - birthYear;
     } OR */
    
    calcAge: function() {
        return 2022 - this.birthYear;
    }
}

// console.log(job.calcAge(2004));
// console.log(job['calcAge'](2004));
console.log(job.calcAge());
