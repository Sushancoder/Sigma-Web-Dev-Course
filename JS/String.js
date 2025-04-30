// Creating a string(a sequence of characters is called string.)
// We mostly write it withing double or single quotes
let str = 'Bhupendra Yogi' //or
let str1 = "Bhupendra Yogi" // both are same

// To get the length of a string
console.log(str.length)

// Template literals are made using backtics in which we can even enclose both quotes
let str2 = `It is 'a' "good" day`

// we can type the variables within backtics which is called interpolation
let str3 = `This is ${str1} and ${str2}`
console.log(str3)


// Escape sequence characters:

// \': Represents a single quote character (').
// \": Represents a double quote character (").
// \\: Represents a backslash character ().
// \n: Represents a newline character.
// \r: Represents a carriage return character.
// \t: Represents a tab character.
// \b: Represents a backspace character.
// \f: Represents a form feed character.
// \uXXXX: Represents a Unicode character with the specified hexadecimal code point. 
// For example, \u0041 represents the letter "A".

console.log('Single quote: \'');
console.log("Double quote: \"");
console.log('Backslash: \\');
console.log('Newline: Hello\nWorld');
console.log('Carriage return: Hello\rWorld');
console.log('return: Hello\rWorld');
console.log('Tab: Hello\tWorld');
console.log('Backspace: Hello\bWorld');
console.log('Form feed: Hello\fWorld');
console.log('Unicode: \u0041');


// String properties and methods

// length: Returns the length of a string.
const str4 = "Hello";
console.log(str4.length); // Output: 5

// concat(): Concatenates two or more strings and returns a new string.
const str5 = "Hello";
const str6 = " World";
const newStr = str5.concat(str6);
console.log(newStr); // Output: Hello World

// toUpperCase(): Converts a string to uppercase.
const str7 = "hello";
console.log(str7.toUpperCase()); // Output: HELLO

// toLowerCase(): Converts a string to lowercase
const str8 = "wOrLd";
console.log(str8.toLowerCase()); // Output: world

// charAt(): Returns the character at a specified index in a string.
const str9 = "Hello";
console.log(str9.charAt(1)); // Output: e

// indexOf(): Returns the index of the first occurrence of a specified value in a string.
const str10 = "Hello World";
console.log(str10.indexOf("o")); // Output: 4

// substring(): Extracts a portion of a string based on specified start and end indexes.
const str11 = "Hello World";
console.log(str11.substring(6, 11)); // Output: World

// split(): Splits a string into an array of substrings based on a specified separator.
const str12 = "Hello,World";
console.log(str12.split(",")); // Output: ["Hello", "World"]

// replace(): Replaces a specified value or regular expression in a string with another value.
const str13 = "Hello World";
console.log(str13.replace("World", "Universe")); // Output: Hello Universe

// slice(): To access portion of a string based on specified start and end indexes
// it is as same as substring
const str14 = "Hello World";
console.log(str14.slice(2,4)) // Output: ll
console.log(str14.slice(3)) //output: lo world

// trim(): Removes all extra whitespaces from a String
const str15 = "            Hello World ";
console.log(str15.trim())

// In JavaScript, the startswith, endswith, and includes methods are used to check if a string contains a specific substring.

// startswith: It checks if a string starts with a specified substring. It returns true if the string starts with the specified substring, otherwise it returns false. Here's an example:
const str16 = "Hello, world!";
console.log(str16.startsWith("Hello")); // Output: true
console.log(str16.startsWith("World")); // Output: false

// endswith: It checks if a string ends with a specified substring. It returns true if the string ends with the specified substring, otherwise it returns false. Here's an example:
const str17 = "Hello, world!";
console.log(str17.endsWith("world!")); // Output: true
console.log(str17.endsWith("Hello")); // Output: false

// includes: It checks if a string contains a specified substring. It returns true if the string contains the specified substring, otherwise it returns false. Here's an example:
const str18 = "Hello, world!";
console.log(str18.includes("world")); // Output: true
console.log(str18.includes("foo")); // Output: false
// These methods are case-sensitive, meaning that the capitalization of letters matters when comparing strings.

Exercise:

// Q1: Find the length of the string given below
console.log('hel\n'.length)

// Q3
givenstr = 'HElLo wORLd'
console.log(givenstr.toLowerCase())

// Q4
askstr = "Plaese give Rs 1000"
console.log(askstr.slice(15))

// Q5
givenstr = 'Hello World';
console.log(givenstr.replace(givenstr.slice(4,5), 'hr'))
