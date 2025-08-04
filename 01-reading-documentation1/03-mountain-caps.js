// Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?
// No

let str = 'mountain';

// Chaining
function capFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function capFirstLetter2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Array destructuring
function capFirstLetter3(str) {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('');
}

console.log(capFirstLetter3(str)); // Mountain

