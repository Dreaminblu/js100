// The MDN page for Date lists two methods to get the year of a date.
// What is the difference between the two methods and which one should you use?

let today = new Date();

today.getYear(); // year of the date - 1900 (125)
today.getFullYear(); // current year (2025)
