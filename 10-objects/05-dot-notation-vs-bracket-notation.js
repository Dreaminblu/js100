// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific'; // adds key 'prefix'

console.log(ocean); // { prefix: 'Pacific' }

// dot notation sets the literal key 'prefix' on the object

let ocean2 = {};
let prefix2 = 'Indian';

ocean2[prefix2] = 'Pacific'; // if prefix = 'Indian', adds key 'Indian'

console.log(ocean2); // { Indian: 'Pacific' }

// bracket notation uses the value of the variable 'prefix'