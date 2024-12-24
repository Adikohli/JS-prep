// Question 1: Write a JavaScript function that checks if a number is positive and returns a message.
// Expected Output:
// Input: 5
// Output: "The number is positive."

const positiveNumber = (num) =>{
    if(num >= 0)
        return "The number is positive"
    else
        return "Not a positive number"
};
console.log(positiveNumber(5));

 //------------------2nd WAY---------------------

 const positiveNum = (num) =>{
    return num >= 0 ? "The number is positive" : "Not a positive number"
 };
console.log(positiveNum(5));



// Question 2: Write a JavaScript function that returns "Adult" if the age is 18 or above, otherwise "Minor".
// Expected Output:
// Input: 16
// Output: "Minor"

const ageChecker = (age) => {
    return age >= 18 ? "Adult" : "Minor";
};
console.log(ageChecker(18));


// Question 3: Write a JavaScript function that checks if a grade is "A", "B", "C", or "Fail".
// Expected Output:
// Input: 85
// Output: "Grade A"
const gradeChecker = (score) => {
    if(score >= 85)
            return "Grade - A"
    else if(score >= 70)
            return "Grade - B"
    else if(score >= 50)
            return "Grade - c"
    else 
            return "Fail"
}
console.log(gradeChecker(49));



// Question 4: Write a JavaScript function that checks if a number is even or odd.
// Expected Output:
// Input: 7
// Output: "The number is odd."
const evenOdd = (num) =>{
    return num%2===0 ? "The number is Even" : "The number is Odd";
};
console.log(evenOdd(3));


// Question 5: Write a JavaScript function that checks if a number is positive, negative, or zero.
// Expected Output:
// Input: -3
// Output: "The number is negative."
const checkNum = (num) =>{
    return num > 0 
        ? "The number is positive."
        : num < 0
        ? "The number is negative."
        : "The number is zero"
};
console.log(checkNum(-1));



// Question 6: Write a JavaScript function that returns the day of the week based on a number (1 for Monday, 7 for Sunday).
// Expected Output:
// Input: 3
// Output: "Wednesday"
const dayOfWeek = (day) =>{
    switch(day){
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid Day";
    };
};

console.log(dayOfWeek(5));



// Question 7: Write a JavaScript function that checks if a number is divisible by both 3 and 5.
// Expected Output:
// Input: 15
// Output: "T he number is divisible by both 3 and 5."
const numDivisible = (num) =>{
    return num%3 === 0 && num%5 === 0 ? "The number is divisible by both 3 and 5" : "The number is not divisible by both 3 and 5";
};
console.log(numDivisible(15));


// Question 8: Write a JavaScript function that checks if two numbers are equal.
// Expected Output:
// Input: 10, 10
// Output: "The numbers are equal."
const numEqual = (num1, num2) => {
    return num1 === num2 ? "The numbers are equal" : "The numbers are not equal";
};
console.log(numEqual(12, 12));


// Question 9: Write a JavaScript function that checks if a given value is falsy and returns a message.
// Expected Output:
// Input: 0
// Output: "The value is falsy."
const falsyValue = (value) => {
    return !value ? "The value is falsy" : "The Value is truthy";
};
console.log(falsyValue(undefined));