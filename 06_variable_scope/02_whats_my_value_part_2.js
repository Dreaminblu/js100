// What will the following code log to the console and why? Don't run it until you have tried to answer.

// console.log(greeting);
// let greeting = 'Hello world!';

// This will throw a ReferenceError.
// With let and const, the variable is hoisted but not usable until it’s declared (temporal dead zone).

let greeting = 'Hello world!';
console.log(greeting);