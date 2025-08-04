// Take a look at the code below. Without running it, determine what it will log to the console.
//  If you're not sure, refer to the MDN documentation on switch statements.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// neigh tweet tweet *cricket*
// Since there is no break after case 'horse', the code starts executing from that case and continues through the rest of the cases