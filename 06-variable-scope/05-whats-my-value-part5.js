// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a); // ReferenceError here because inner 'a' is in TDZ
    let a = 2;
    console.log(a);
  }
}

myFunction();

