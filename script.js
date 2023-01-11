let multiplyResult = document.querySelector(".multiply-result");
let greetingResult = document.querySelector(".greeting-result");
let votingResult = document.querySelector(".voting-result");


/************* CODE ALONG *************/

// task 1: declare a function and name it multiplyByTwo
function multiplyByTwo() {
// task 2: inside the function, declare a variable called num
  let num;
// task 3: set num to equal the number 3
  num = 3;
// task 4: multiply num by 2. (tip: you can reassign the variable you already declared to be itself multiplied by two)
  num = num*2;
// task 5: return the multiplied number
  return num;
};

// task 6: save the function call multiplyByTwo in a variable named result1
let result1 = multiplyByTwo();
// task 7: print result1 to the multiplyResult div
multiplyResult.innerHTML = result1


/************* CODE IT SOLO *************/

// task 8: declare a function and name it greetByName
const greetByName = () => {
  

// task 9: inside the function, declare a variable called firstName
  let firstName;
// task 10: set firstName equal to a string of your first name
  firstName = "Jorge";
// task 11: do the same, but for your last name
  let lastName;
  lastName = "Rosado";
// task 12: use string interpolation to add a greeting in front of your name. Example: Hello, Hi, Welcome, Hola.
  let greeting = "Hello, " + firstName + " " + lastName
// task 13: return the greeting and your name
  return greeting;
};

// task 14: save the function call greetByName in a variable named result2
let result2 = greetByName();
// task 15: print result2 to the greetingResult div
greetingResult.innerHTML = result2



//Challenge!
/* 

Create a function that returns whether a person can vote based on their age.

HINTS:

Inside the function, set an age variable to number 18.
You will need to use a conditional statement!
If the age is equal to or greater than 18, "Go vote!" should be printed to the votingResult div. Otherwise, "Can't vote quite yet!" should be printed.
Save the function call to a variable.
Call the variable to run the function (no parentheses needed after the variable name!)

*/

const votingAgeEligibility = () => {
  let age
  age = 18
  let eligibility
  if(age >= 18){
    eligibility = "Go vote!"
  } else {
    eligibility = "Can't vote quite yet!"
  }
  return eligibility;
};

let votingEligibility = votingAgeEligibility();
votingResult.innerHTML = votingEligibility;