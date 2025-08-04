// Check the documentation of both TypeError and length, in order to find out what causes the error.
// TypeError: tweet.length is not a function

// The error means that you tried to call .length like a function, but .length is a property not a method.

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}