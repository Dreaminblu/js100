// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); 

// false
// The let b = true inside the if block creates a new b variable scoped only inside that block.
// The outer b (declared before the if) stays unchanged outside the block.
// Thus, the console.log(b) logs the outer b