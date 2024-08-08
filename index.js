// Task 1: Given an array, use the "for in" loop to print all the indexes of this array
function printIndexes(array) {
  for (let index in array) {
    console.log(index);
  }
}

console.log("Task 1 ====================================");
printIndexes([1, 2, 3, 4, 5]);
// Output
// 0
// 1
// 2
// 3
// 4

// Task 2: Given an array, use the "for in" loop to find the sum of all elements in the array
function sumArray(array) {
  let sum = 0;
  for (let index in array) {
    sum += array[index];
  }
  return sum;
}

console.log("Task 2 ====================================");
console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Output: 15

// Task 3: Given an array, use the "for of" loop to find the product of all elements in the array
function multiplyArray(array) {
  let product = 1;
  for (let element of array) {
    product *= element;
  }
  return product;
}

console.log("Task 3 ====================================");
console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Output: 120

// Task 4: Given an array of strings, delete the third element of the array and convert it to a string using the toString() method. Output the result to the console.
function modifyArray(array) {
  delete array[2];
  return array.toString();
}

console.log("Task 4 ====================================");
console.log(modifyArray([1, "two", 3, "four", 5])); // Output: 1,two,,four,5

// Task 5: Given an array of strings, use a for loop to iterate over the array and print each element to the console in uppercase.
function printUppercase(array) {
  for (let element of array) {
    console.log(element.toUpperCase());
  }
}

console.log("Task 5 ====================================");
printUppercase(["one", "two", "three"]); // Output: ONE TWO THREE

// Task 6: The function accepts a destructured array of numbers, with the first element and the array of all others.
// Use a for loop to iterate over the array, find the minimum and maximum values, and print the result to the console.
function findMinMax([firstElement, ...restElements]) {
  let minValue = firstElement;
  let maxValue = firstElement;
  for (let i = 0; i < restElements.length; i++) {
    let element = restElements[i];
    if (element < minValue) { minValue = element; }
    if (element > maxValue) { maxValue = element; }
  }
  console.log('Minimum value:', minValue);
  console.log('Maximum value:', maxValue);
}

console.log("Task 6 ====================================");
findMinMax([5, 2, 8, 1, 9, 3]); // Output: Minimum value: 1, Maximum value: 9

// Task 7: The function accepts an array of strings.
// Convert the array to a string using the toString() method and repeat it 2 times. Print the result to the console.
function printStrings(array) {
  let newString = array.toString();
  let repeatedString = newString.repeat(2);
  console.log(repeatedString);
}

console.log("Task 7 ====================================");
printStrings([1, "two", 3, "four", 5]); // Output: 1,two,3,four,51,two,3,four,5

// Task 8: The function accepts an array of strings.
// Use the toString() method to convert the array to a string and check if it contains the substring subString.
function concatenateStrings(array, subString) {
  let stringNew = array.toString();
  return stringNew.includes(subString);
}

console.log("Task 8 ====================================");
console.log(concatenateStrings([1, "two", 3, "four", 5], "two")); // Output: true

// Task 9: The function accepts an array of numbers.
// Use a for-in loop to iterate over the array and add 10 to each element.
// Store the result in a new array. Print the result to the console.
function addTenToEach(array) {
  let resultArray = new Array(array.length);
  for (let index in array) {
    resultArray[index] = array[index] + 10;
  }
  console.log(resultArray);
}

console.log("Task 9 ====================================");
addTenToEach([5, 10, 15, 20]); // Output: [15, 20, 25, 30]

// Task 10: Create a function that accepts an array of numbers as an argument.
function swapMinMax(array) {
  let min = array[0];
  let max = array[0];
  let maxIndex = 0;
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    } else if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  [array[maxIndex], array[minIndex]] = [array[minIndex], array[maxIndex]];
  return array;
}

console.log("Task 10 ====================================");
// Print the result of calling the swapMinMax function with the array [1, 2, 3, 4, 5] as an argument. We expect to see [5, 2, 3, 4, 1], since the maximum and minimum values are swapped.
console.log(swapMinMax([1, 2, 3, 4, 5]));

// Task 11: The function accepts an array of numbers. Return a new array that contains only the even numbers from the original array.
function getEvenNumbers(arr) {
  let newArray = [];
  for (let index in arr) {
    if (arr[index] % 2 === 0) {
      newArray.push(arr[index]);
    }
  }
  return newArray;
}
console.log("Task 11 ====================================");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// Task 12: The function accepts an array of numbers. Return a new array where all numbers are multiplied by their index.
function multiplyByIndex(arr) {
  let arrNew = [];
  for (let index in arr) {
    arrNew[index] = arr[index] * index;
  }
  return arrNew;
}
console.log("Task 12 ====================================");
console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Output: [0, 2, 6, 12, 20]

// Task 13: The function accepts an array of numbers. Return a new array where all numbers greater than 10 are replaced with the string "Greater than 10", and the rest of the numbers are replaced with the string "Less than or equal to 10".
function replaceNumbers(arr) {
  let newArr = [];
  for (let index in arr) {
    if (arr[index] > 10) {
      newArr.push("Greater than 10");
    } else if (arr[index] <= 10) {
      newArr.push("Less than or equal to 10");
    }
  }
  return newArr;
}

console.log("Task 13 ====================================");
console.log(replaceNumbers([5, 10, 15, 20])); // Output: ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]
