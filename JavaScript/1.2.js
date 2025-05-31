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

function canVote (age) {
  if (age > 18) {
    return true;
  }else {
    return false;
  }
}
let ans = canVote(19)

console.log(ans);

