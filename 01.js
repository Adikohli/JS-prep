// Question 1: Write a JavaScript function that returns the length of a given string.
// Expected Output:
// Input: "JavaScript"
// Output: 10
// Sol: 
    function getStringLength(str) {
      return str.length;
  }
    console.log(getStringLength("JavaScript")); // Output: 10


// Question 2: Write a JavaScript function that returns the index of the first occurrence of the substring "apple" in a string.
// Expected Output:
// Input: "I have an apple and a banana"
// Output: 11
// Sol:
    function getFirstAppleIndex(str) {
    return str.indexOf("apple");
}
console.log(getFirstAppleIndex("I have an apple and a banana")); //Output:11



// Question 3: Write a JavaScript function that returns the index of the last occurrence of the substring "apple" in a string.
// Expected Output:
// Input: "I have an apple and another apple"
// Output: 27
// Solution:
    function getLastAppleIndex(str) {
    return str.lastIndexOf("apple");
}
console.log(getLastAppleIndex("I have an apple and another apple")); //Output: 27



// Question 4: Write a JavaScript function to search for the position of the first number in a string using a regular expression.
// Expected Output:
// Input: "My favorite number is 42"
// Output: 21
// Sol:
   function getFirstNumberIndex(str) {
    const match = str.match(/\d/);
    return match ? match.index : -1;
}
console.log(getFirstNumberIndex("My favorite number is 42")); // Output: 21




// Question 5: Write a JavaScript function that searches for the first occurrence of a digit (0-9) in a string.
// Expected Output:
// Input: "The year is 2024"
// Output: 12
// Sol:
    function getFirstDigitIndex(str) {
    return str.search(/\d/);
  }
 console.log(getFirstDigitIndex("The year is 2024"));    // output: 12





// Question 6: Write a JavaScript function that finds the position of the first vowel (a, e, i, o, u) in a given string.
// Expected Output:
// Input: "rhythm"
// Output: -1 (no vowels)
// Input: "JavaScript"
// Output: 1 (first vowel is 'a' at index 1)
// Sol:
      function getFirstVowelIndex(str) {
        const match = str.search(/[aeiou]/i);
        return match !== -1 ? match : -1;
    }
      console.log(getFirstVowelIndex("rhythm")); //  Output: -1
      console.log(getFirstVowelIndex("JavaScript"));      // Output: 1


    



// Question 7: Write a JavaScript function that finds the position of the first sequence of two or more digits in a string.
// Expected Output:
// Input: "There are 20 apples"
// Output: 10
// Input: "I have 1 apple"
// Output: -1 (only one digit)
// Sol: 
      function getFirstTwoDigitsIndex(str) {
          const match = str.match(/\d{2,}/);
      return match ? match.index : -1;
    }
    console.log(getFirstTwoDigitsIndex("There are 20 apples")); // Output: 10
    console.log(getFirstTwoDigitsIndex("I have 1 apple")); // Output: -1





// Question 8: Write a JavaScript function that finds the position of the first word that ends with the letter 's' in a string.
// Expected Output:
// Input: "The dogs are barking"
// Output: 4
// Sol: 
       function getFirstWordEndingWithSIndex(str) {
        const match = str.match(/\b\w+s\b/);
        return match ? match.index : -1;
    }
      console.log(getFirstWordEndingWithSIndex("The dogs are barking")); // Output: 4

      



// Question 9: Write a JavaScript function that finds the position of the first word that starts with a capital letter.
// Expected Output:
// Input: "hello World"
// Output: 6
// Sol: Using Regex
      function getFirstCapitalWordIndex(str) {
          const match = str.match(/\b[A-Z][a-z]*\b/);
          return match ? match.index : -1;
      }
        console.log(getFirstCapitalWordIndex("hello World")); // Output: 6






// Question 10: Write a JavaScript function that replaces the first occurrence of "dog" with "cat" in a string.
// Expected Output:
// Input: "The dog is in the yard"
// Output: "The cat is in the yard"
// Sol:
      function replaceFirstDogWithCat(str) {
        return str.replace("dog", "cat");
    }
      console.log(replaceFirstDogWithCat("The dog is in the yard")); //Output: "The cat is in the yard"






// Question 11: Write a JavaScript function that pads a number string (like "42") with zeros at the start to make it a length of 5 characters.
// Expected Output:
// Input: "42"
// Output: "00042"
// Solution: 
      function padNumber(str) {
        return str.padStart(5, "0");
      }
        console.log(padNumber("42")); // Output: "00042"

      

// Question 12: Write a JavaScript function that pads the string "hello" with exclamation marks (!) at the end to make it 10 characters long.
// Expected Output:
// Input: "hello"
// Output: "hello!!!!!"
// Sol:
      function padHelloWithExclamation(str) {
        return str.padEnd(10, "!");
    }
      console.log(padHelloWithExclamation("hello")); // Output: "hello!!!!!"







// Question 13: Write a JavaScript function that extracts the word "world" from the string "Hello world!".
// Expected Output:
// Input: "Hello world!"
// Output: "world"
// Solution:
      function extractWorld(str) {
        return str.slice(7, 10);
    }
        console.log(extractWorld("Hello world!")); // Output: "world"


// Question 14: Write a JavaScript function that extracts the first 4 characters of a string.
// Expected Output:
// Input: "JavaScript"
// Output: "Java"
// Solution:
      function extractFirstFourChars(str) {
          return str.slice(0, 4);
      }
      console.log(extractFirstFourChars("JavaScript")); // Output: "Java"



// Question 15: Write a JavaScript function that extracts 6 characters from a string starting from the 4th character.
// Expected Output:
// Input: "JavaScript"
// Output: "Script"
// Sol:
    function extractSixFromFourth(str) {
          return str.slice(4, 10);
    }
    console.log(extractSixFromFourth("JavaScript")); // Output: "Script"

        
