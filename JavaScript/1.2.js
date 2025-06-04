// Syntax of Javascript

// let firstName = "abhi"
// const dateOfBirth = "12-12-2004"
// // var dateOfBirth = "12-12-2004"
// // let dateOfBirth = "12-12-2004"
// var age = "20"

// console.log(dateOfBirth);
// console.log(firstName);
// console.log(age);

// let firstName = "abhi"
// firstName = "achu"
// firstName = "rocky"
// console.log(firstName);


// Assignment

// let colour = "black"
// const height = "179cm"
// var doYouLikePizza = "yes"

// console.log(colour);
// console.log(height);
// console.log(doYouLikePizza);

// functions

// function greet(firstName) {
//   return "Hello " + firstName
// }
// let ans = greet ("abhilash")

// console.log(ans);

// function sum(a,b) {
//   return a + b
// }
// let add = sum(34,45)
// console.log(add);

// Assignment2 
// let age = 34

// if (age > 18) {
//   console.log("You are eligible to vote");
// }
// else if (age < 18) {
//   console.log("You are not eligible to vote");
// }

// function canVote (age) {
//   if (age > 18) {
//     return true;
//   }else {
//     return false;
//   }
// }
// let ans = canVote(19)

// console.log(ans);

// function canVote (age) {
//   if (age > 18){
//     return true;
//   }else {
//     return false;
//   }
// }
// let ans = canVote(20)
// console.log(ans);

// let users = ["abhilash", "achu", "rocky", "abhi", "Achu"]

// for (let i = 0; i < 4; i ++){
//   console.log( users[i]);
  
// }

// let user = ["abhi", "abi", "abhi2", "abi2", "abhi3", "abi", "abi4","achu"," achu "]

// let usersUpdate = user.length

// for (let i = 0; i < user.length; i ++){
//   console.log(user [i]);
  
// }

/// if else Assignment
// let num = 12;

// if (num % 2 == 0) {
//   console.log("this is even number");
// } else {
//   console.log("this is a odd number");
// }

//// loops Assignment
// Write a function called sum that finds the sum from 1 to a number
function sum(num) {
  // initialize sum to 0
  let sum = 0;

  // loop from 1 to num
  for (let i = 1; i <= num; i++) {
    // add i to sum
    sum += i;
  for (i = 0; i > sum; i= i + sum ){
  }

  // return sum
  return sum;
}

