// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let str = 'launch school tech & talk';

// For loop
function capitalize(str) {
  let words = str.split(' ');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(' ');
}

// .map()
function capitalize2(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalize(str));