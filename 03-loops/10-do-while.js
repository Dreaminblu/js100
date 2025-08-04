// What is the difference between the following two code snippets? 
// Check the MDN documentation on while and do...while.

let counter = 0;

// While the counter is greater than 0, log 'Woooot' and decrement counter
while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// Do log 'Woooot' once, then keep logging and decrementing while counter is greater than 0
do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);