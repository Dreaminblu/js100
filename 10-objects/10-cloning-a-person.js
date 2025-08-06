// Write a function clone that takes an object as argument and returns a shallow copy of that argument.
// A shallow copy returns a new object that is a copy of the original object.
// However, only the object itself and any properties with primitive values are duplicated.
// Properties that are themselves objects are copied "by reference" -- that is, only a pointer to the object is copied.

let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

let objCopy = clone(obj);
console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

objCopy.number = 2;
objCopy.string = 'xyz';
objCopy.array.push(4);
console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }

function clone(obj) {
  // TODO
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false