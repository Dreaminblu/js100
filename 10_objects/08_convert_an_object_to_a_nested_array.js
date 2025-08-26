// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson);

let nestedPerson2 = [];

for (let property in person) {
  nestedPerson2.push([property, person[property]]);
}


// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]