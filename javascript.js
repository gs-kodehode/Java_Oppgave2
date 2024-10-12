/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
//brukt av arrow function for å sjekke om oddetall eller partall
const findOddEven = (number) => {
  return number % 4 === 0 ? "Even" : "Odd"; //returnere (if / else)
};
console.log(findOddEven(16)); //Even
console.log(findOddEven(25)); //Odd

/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
// brukt av function keyword!
function upperAndExclaim(string) {
  return string.toUpperCase() + "!"; // konvertere string til UpperCase og legg til "!".
}

//brukt av Arrow function!
const myArrowFunction = (String) => {
  return String.toUpperCase() + "!";
};

// sjekke function i console!!
console.log(upperAndExclaim("This is cool"));
console.log(myArrowFunction("This is cool"));

/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/
// // Brukt av Arrow function
const myArrowFunctionTime = (name, hour) => {
  // string and number two para
  if (hour < 0 || hour > 23) {
    // hvis den er false
    return "Invalid time"; // så returnere dette!
  } else if (hour >= 0 && hour <= 5) {
    // hvis den er true
    return `Good night, ${name}`; // så returnere GN med navn!
  } else if (hour >= 6 && hour <= 11) {
    return `Good morning, ${name}`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good day, ${name} `;
  } else if (hour >= 18 && hour <= 23) {
    return `Good evening, ${name}`;
  } else {
    return "Error message: No more hour received";
  }
};
// for å sjekke i console!
console.log(myArrowFunctionTime("Peter", 24)); // han er invaild tid Pga tid er str
console.log(myArrowFunctionTime("Geir", -3));
console.log(myArrowFunctionTime("Olav", 4));
console.log(myArrowFunctionTime("Martin", 9));
console.log(myArrowFunctionTime("Josef", 15));
console.log(myArrowFunctionTime("Kevin", 20));
console.log(myArrowFunctionTime("Tomas"));

//brukt av function keyword // definere function først
function myFunctionTime(name, hour) {
  if (hour < 0 || hour > 23) {
    // hvis den er false
    return "Invalid time"; // så returnere dette!
  } else if (hour >= 0 && hour <= 5) {
    // hvis den er true
    return `Good night, ${name}`; // så returnere GN med navn!
  } else if (hour >= 6 && hour <= 11) {
    return `Good morning, ${name}`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good day, ${name} `;
  } else if (hour >= 18 && hour <= 23) {
    return `Good evening, ${name}`;
  } else {
    return "Error message: No more hour received";
  }
}
console.log(myFunctionTime("Peter", 24)); // han er invaild tid Pga tid er str enn 23!
console.log(myFunctionTime("Geir", -3));
console.log(myFunctionTime("Olav", 4));
console.log(myFunctionTime("Martin", 9));
console.log(myFunctionTime("Josef", 15));
console.log(myFunctionTime("Kevin", 20));
console.log(myFunctionTime("Tomas"));

/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/
// definere
const color = ["Red", "Green", "Blue", "Yellow"];
const arrayNum = ["One", "Two", "Three", "Four", "Five", "Six"];
const myIndexRemoveFirstAndLast = (array) => {
  // ved brukt av arrow function
  if (array.length >= 3) {
    // hvis array har 3 element
    return array.slice(1, -1); // first and last element
  } else {
    return []; // ellers returnere tom array!
  }
};

// for å sjekke i console!
console.log(myIndexRemoveFirstAndLast(color));
console.log(myIndexRemoveFirstAndLast(arrayNum));

/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/
// definere text først!
const firstText = "  Javascript is hard   ";
const secondText = " It's hard to use methods ";
const thirdText = "   hard        ";

const replaceWord = (Text) => {
  // ved brukt av arrow function
  const replaceText = Text.replace("hard", "fun"); // erstatte ord

  return replaceText.trim(); // fjerne mellomrommet
};
// for å sjekke i console !

console.log(replaceWord(firstText));
console.log(replaceWord(secondText));
console.log(replaceWord(thirdText));

/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/
const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];
// definere function keyword
function modifyHeroes(allFighter) {
  allFighter.shift(); // fjerne spider-m

  const hero = allFighter.indexOf("Doctor Strange"); // erstatte DS med Skr
  if (hero !== -1) {
    allFighter[hero] = "Skrull";
  }
  // fjerne thor og hulk og legge CA
  const userThor = allFighter.indexOf("Thor");
  if (userThor !== -1) {
    allFighter.splice(userThor, 1);
  }

  const userHulk = allFighter.indexOf("Hulk");
  if (userHulk !== -1) {
    allFighter.splice(userHulk, 1);
  }

  allFighter.push("Captain America");

  return allFighter.join("💪");
}
//  sjekker i consolelog
console.log(modifyHeroes([...heroes]));
/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/
