// ============================================================================
// JAVASCRIPT SYNTAX EXAMPLES
// ============================================================================

// ----------------------------------------------------------------------------
// 1. VARIABLES (let, const, var)
// ----------------------------------------------------------------------------

/*
// Example 1: Declaring variables
let firstName = "abhi";
const dateOfBirth = "12-12-2004";
var age = "20";

console.log(dateOfBirth);
console.log(firstName);
console.log(age);

// Example 2: Re-assigning a 'let' variable
let anotherFirstName = "abhi";
anotherFirstName = "achu";
anotherFirstName = "rocky";
console.log(anotherFirstName);

// Assignment: Declare variables for colour, height, and pizza preference
let colour = "black";
const height = "179cm";
var doYouLikePizza = "yes";

console.log(colour);
console.log(height);
console.log(doYouLikePizza);
*/

// ----------------------------------------------------------------------------
// 2. FUNCTIONS
// ----------------------------------------------------------------------------

/*
// Example 1: A simple greeting function
function greet(firstName) {
  return "Hello " + firstName;
}
let greeting = greet("abhilash");
console.log(greeting);

// Example 2: A function to sum two numbers
function addTwoNumbers(a, b) {
  return a + b;
}
let sumResult = addTwoNumbers(34, 45);
console.log(sumResult);
*/

// ----------------------------------------------------------------------------
// 3. CONDITIONAL STATEMENTS (if-else)
// ----------------------------------------------------------------------------

/*
// Example 1: Checking voting eligibility
let userAge = 34;

if (userAge > 18) {
  console.log("You are eligible to vote");
} else if (userAge < 18) {
  console.log("You are not eligible to vote");
}

// Example 2: A function to check voting eligibility
function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
let isEligible = canVote(19);
console.log(isEligible);

// Assignment: Check if a number is even or odd
let num = 12;

if (num % 2 == 0) {
  console.log("This is an even number");
} else {
  console.log("This is an odd number");
}
*/

// ----------------------------------------------------------------------------
// 4. LOOPS (for)
// ----------------------------------------------------------------------------

/*
// Example 1: Iterating through an array of users
let users = ["abhilash", "achu", "rocky", "abhi", "Achu"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// Example 2: Another array iteration
let userList = ["abhi", "abi", "abhi2", "abi2", "abhi3", "abi", "abi4", "achu", " achu "];
for (let i = 0; i < userList.length; i++) {
  console.log(userList[i]);
}
*/


// ============================================================================
// LOOPS ASSIGNMENT: Sum of numbers from 1 to n
// ============================================================================

/**
 * Calculates the sum of all integers from 1 to a given number.
 * @param {number} num The upper bound of the summation (inclusive).
 * @returns {number} The sum of numbers from 1 to num.
 */
function sum(num) {
  // initialize sum to 0
  let totalSum = 0;

  // loop from 1 to num
  for (let i = 1; i <= num; i++) {
    // add i to sum
    totalSum += i;
  }

  // return sum
  return totalSum;
}

// Example of how to use the function:
// const result = sum(10);
// console.log('The sum from 1 to 10 is:', result); // Output: 55