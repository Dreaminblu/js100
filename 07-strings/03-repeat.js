// Implement a function repeat that repeats an input string a given number of times, as shown in the example below;
// without using the pre-defined string method String.prototype.repeat().

function repeat (num, str) {
  let result = '';

  for (let i = 0; i < num; i++) {
    result += str;
  }
  
  return result;
}

function repeat2 (num, str) {
  let result = '';

  while (num > 0) {
    result += str;
    num--;
  }

  return result;
}

console.log(repeat2(3, 'ha'));
