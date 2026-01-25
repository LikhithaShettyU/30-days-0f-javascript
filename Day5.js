// ===============================
// Day 5 - JavaScript Functions
// Topics:
// 1. Functions
// 2. Parameters & Arguments
// 3. Return Statement
// 4. Arrow Functions
// ===============================


// ---------- Basic Function ----------

function greet() {
  console.log("Hello, welcome to JavaScript!");
}

// Calling the function
greet();
greet();


// ---------- Function with Parameter ----------

function greetUser(name) {
  console.log("Hello " + name);
}

// Calling with arguments
greetUser("Likhitha");
greetUser("John");


// ---------- Function with Multiple Parameters ----------

function add(a, b) {
  console.log(a + b);
}

add(5, 10);
add(20, 30);


// ---------- Return Statement ----------

function addNumbers(x, y) {
  return x + y;
}

let result = addNumbers(2, 3);
console.log(result);


// ---------- Return vs console.log ----------

// console.log prints the value
function multiply(a, b) {
  console.log(a * b);
}

multiply(3, 4);

// return gives back the value
function multiplyReturn(a, b) {
  return a * b;
}

let output = multiplyReturn(3, 4);
console.log(output);


// ---------- Arrow Function ----------

const greetArrow = (name) => {
  return "Hello " + name;
};

console.log(greetArrow("Likhitha"));


// ---------- Short Arrow Function ----------

const greetShort = name => "Hello " + name;

console.log(greetShort("Sara"));


// ---------- Arrow Function with Multiple Parameters ----------

const addArrow = (a, b) => a + b;

console.log(addArrow(10, 20));


// ---------- Arrow Function with No Parameters ----------

const sayHi = () => "Hi! Welcome to JavaScript";

console.log(sayHi());


// ===============================
// End of Day 5
// ===============================
