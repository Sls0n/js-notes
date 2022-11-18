// JavaScript Date Objects let us work with dates
/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/
const d = new Date("October 13, 2014 11:13:00");
const d2 = new Date("2022-03-25");

const d3 = new Date(2018, 11, 24, 10, 33, 30, 0); // (Months are in 0 index based which means december is represented by 13)

// Working with dates
const future = new Date(2037, 10, 19, 15, 23); // -- > Date Thu Nov 19 2037 15:23:00 GMT+0545 (Nepal Time)
console.log(future.getFullYear()); // --> 2037
console.log(future.getMonth()); // --> 10
console.log(future.getDate()); // --> 19
console.log(future.getDay()); // --> 4
console.log(future.getHours()); // --> 15
console.log(future.getMinutes()); // --> 23
console.log(future.getTime()); // --> 2142236280000 (gives time in milli second)
// we can use this time to generate date again by
console.log(new Date(2142236280000));

// To get formatted string of date
console.log(future.toISOString()); // --> 2037-11-19T09:38:00.000Z
console.log(future.toDateString()); // --> Thu Nov 19 2037

// TO get current time
console.log(Date.now()); // --> 1668774521168

// We can subtract two different dates 
