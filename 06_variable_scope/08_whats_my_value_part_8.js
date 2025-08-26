// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// This function will log 2.
// The function parameter a shadows the outer a.
// The passed-in value (2) replaces the parameter a.