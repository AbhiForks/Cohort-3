// === Section 1 Variables ===
// let firstName = "John"
// const age = 34
// var isStudent = true;

// console.log(firstName);
// console.log(age);
// console.log(isStudent);


// var isStudent = true;
// console.log(isStudent);

// isStudent = "raj"
// console.log(isStudent)

// isStudent = 200
// console.log(isStudent)


// let color = "purple"
// const height = "6'11"
// var age = 12

// console.log(color);
// console.log(height);
// console.log(age);

// === End of Section 1 ===

// === Section 2 Data Types ===
// let age = 13;
// let canVote = (age > 18)

// console.log (canVote)

// Function declaration
// function square(n) {
//   return n * n;
// }

// let result = square(5);  
// console.log(result);  

// function makeSandwich() {
//   console.log("Bread");
//   console.log("Peanut Butter");
//   console.log("Jelly");
//   console.log("Bread");
// }
// console.log(makeSandwich);
// makeSandwich();

// Assignment #1
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
// function sum(a,b){
//   console.log(a + b);
// }
// sum("great",5)

// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18
// function canVote(age){
//   return age > 18
// }

// console.log(canVote(20));

// function canVote (age){
//   console.log(age > 18)
// }
// canVote(10)

// Function declaration
// function greet(name) {
//     return "Hello, " + name;
// }

// // Function call
// let message = greet("John"); // "Hello, John"
// console.log(message);

//// IF ElSe

// function canVote(age){
//     if (age > 18){
//         return true;
//     }else{
//         return false
//     }
// }

// let legalAge = canVote(19)
// console.log(legalAge);
 

// This array contains a list of 10 user names
// let users = ["abhi", "sarah", "michael", "emma", "james", "olivia", "john", "lisa", "david", "sophia"]

// This loop will run 10 times (from 0 to 9)
// Each time it runs, it prints one name from the users array
// i is used to get each name one by one (like counting from 1st name to last name)
// for (let i = 0; i < 10; i++){
//   console.log(users[i])
// }



////// Complex types - objects


// let user1 = {
//   name : "abhilash",
//   age : 19,
//   email : "abcd@gmail.com",
//   friends : "0",
// }

// console.log(user1)
// console.log("Abhi age is " + user1.age)
// console.log("Abhi friends is " + user1.friends)


// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age

// function userFunction(user){
//   return " hello i am " + user.name + " i am " + user.age + " years old "
// }

// let user = {
//   name : "abhilash",
//   age : 90,
// }

// console.log(userFunction(user));

// Assignment #2
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// function greetUser(user) {
//   let title = "";
//   if(user.gender == "male") {
//     title = "Mr";
//   } else if(user.gender == "female") {
//     title = "Mrs";
//   } else {
//     title = "Others";
//   }
//   return "Hi " + title + " " + user.name + ", your age is " + user.age;}

// let user = {
//   name: "abhi",
//   age: 21,
//   gender: "male"
// }

// console.log(greetUser(user));