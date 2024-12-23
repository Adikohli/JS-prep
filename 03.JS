// Practice Question

// Question 1: Write a JavaScript function that adds an element to the end of an array and returns the new length.
// Expected Output:
// Input: [1, 2, 3], 4
// Output: 4

function addElementAtEnd(arr, element){
    return arr.push(element);
};
console.log(addElementAtEnd([1,2,3],4));


// Question 2: Write a JavaScript function that removes the last element from an array and returns it.
// Expected Output:
// Input: [1, 2, 3]
// Output: 3
function removeElementAtEnd(arr){
    return arr.pop();
};

console.log(removeElementAtEnd([1,2,3,4,5]));




// Question 3: Write a JavaScript function that removes the first element from an array and returns it.
// Expected Output:
// Input: [1, 2, 3]
// Output: 1
function removeFirstElement(arr){
    return arr.shift();
};
console.log(removeFirstElement([1,2,3]));




// Question 4: Write a JavaScript function that adds an element to the beginning of an array and returns the new length.
// Expected Output:
// Input: [1, 2, 3], 0
// Output: 4
function addElementAtFirst(arr, element){
    return arr.unshift(element);
};
console.log(addElementAtFirst([1,2,3],0));



// Question 5: Write a JavaScript function that merges two arrays into one.
// Expected Output:
// Input: [1, 2], [3, 4]
// Output: [1, 2, 3, 4]
function mergeArrays(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(mergeArrays([1, 2],[3, 4]));



// Question 6: Write a JavaScript function that extracts a portion of an array without modifying the original array.
// Expected Output:
// Input: [1, 2, 3, 4, 5], 1, 3
// Output: [2, 3]
function extractFromArray(arr, start, end ){
    return arr.slice(start, end);
};

console.log(extractFromArray([1,2,3,4,5],1,3));




// Question 7: Write a JavaScript function that removes two elements from an array starting at index 1 and returns the removed elements.
// Expected Output:
// Input: [1, 2, 3, 4, 5], 1, 2
// Output: [2, 3]
function removeTwoElement(arr, element, count){
    return arr.splice(element, count);
};
console.log(removeTwoElement([1,2,3,4,5],1,2));




// Question 8: Write a JavaScript function that returns the index of the first occurrence of a given element in an array.
// Expected Output:
// Input: [1, 2, 3, 4, 5], 3
// Output: 2
function findIndex(arr, element){
    return arr.indexOf(element);
};
console.log(findIndex([1,2,3,4,5],3));




// Question 9: Write a JavaScript function that reverses the elements in an array.
// Expected Output:
// Input: [1, 2, 3]
// // Output: [3, 2, 1]
function revArray(arr){
    return arr.reverse();
};
console.log(revArray([1,2,3]));