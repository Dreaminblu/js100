// Write a function that takes an ISO 639-1 language code and returns a greeting in that language.
// You can take the examples below or add whatever languages you like.

function greet(languageCode) {
  switch(languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!'; 
  }
}

console.log(greet('en'));
console.log(greet('fr'));
console.log(greet('pt')); 
console.log(greet('de')); 
console.log(greet('sv'));
console.log(greet('af')); 