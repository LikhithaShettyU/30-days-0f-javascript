// ================================
// Day 3: Conditional Statements
// if, else, else if, switch
// ================================


// -------------------------------
// 1. if statement
// -------------------------------

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
}


// -------------------------------
// 2. if else statement
// -------------------------------

let userAge = 16;

if (userAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}


// -------------------------------
// 3. else if statement
// -------------------------------

let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}


// -------------------------------
// 4. switch statement
// -------------------------------

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}


// -------------------------------
// 5. Real life example
// -------------------------------

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella ☔");
} else {
  console.log("No umbrella needed 🌤️");
}


// -------------------------------
// End of Day 3
// -------------------------------
