// Question1: Write a JavaScript function that adds two numbers and returns the result.
// Expected Output:
// Input: 5, 10
// Output: 15

function addTwoNum(num1,num2){
    return num1+num2;
};
console.log(addTwoNum(5,6));


// Question2: Write a JavaScript function that converts a number to a string.
// Expected Output:
// Input: 123
// Output: "123"

function numToString(num){
    return num.toString();
};
console.log(typeof(numToString(12)));


// Question3: Write a JavaScript function that formats a number to 2 decimal places.
// Expected Output:
// Input: 123.45678
// Output: "123.46"

function twoDecimalPlaces(num){
    return num.toFixed(2);
};
console.log(twoDecimalPlaces(4.25648425));


// Question4: Write a JavaScript function that formats a number to 4 significant digits.
// Expected Output:
// Input: 123.45678
// Output: "123.5"

function toFourSignificantDigit(num){
    return num.toPrecision(4);
};
console.log(toFourSignificantDigit(12.548963));




// Question5: Write a JavaScript function that represents a number in exponential notation.
// Expected Output:
// Input: 1234
// Output: "1.234e+3"
function toExpNotation(num){
    return num.toExponential();
};
console.log(toExpNotation(1234));




// Question6: Write a JavaScript function that converts a string to a number.
// Expected Output:
// Input: "123"
// Output: 123
function stringToNum(str){
    return Number(str);
};
console.log(stringToNum("123"));




// Question7: Write a JavaScript function that extracts an integer from a string.
// Expected Output:
// Input: "123abc"
// Output: 123
function extractInteger(str){
    return parseInt(str);
};
console.log(extractInteger("123abc"));




// Question8: Write a JavaScript function that extracts a floating-point number from a string.
// Expected Output:
// Input: "123.45abc"
// Output: 123.45
function extractFloat(str){
    return parseFloat(str);
};
console.log(extractFloat("123.45abc"));