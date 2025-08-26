// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// The function will log 1.
// The variable a is declared outside the function, in the global scope.
// It doesn't find a declared inside the function, so it looks outward and finds the global a with the value 1.
// Therefore, it will log 1.


