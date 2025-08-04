// Write a loop that logs greeting three times.

let greeting = 'Aloha!';

for (let i = 0; i < 3; i++) {
  console.log(greeting);
}

let count = 1;

while (count <=3) {
  console.log(greeting);
  count++;
}

do {
  console.log(greeting);
  count++;
} while (count <= 3);