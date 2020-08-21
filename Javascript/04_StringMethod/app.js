const firstName = 'Hank 123';
const lastName = 'Kim 12312';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Hank Kim';
val += 'the Second'; // Hank Kimthe Second

const age = 32;

val = 'Hello, My name is' + firstName + ' and I am ' + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Index
val = firstName[0];

// IndexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('n');

// CharAt()
val = firstName.charAt(2);

// Get last word
val = firstName.charAt(firstName.length - 1);
