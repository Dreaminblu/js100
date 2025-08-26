// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// This will throw a TypeError.
//  Because a is declared as a constant, and constants cannot be reassigned.

