// ================================
// Day 2: Data Types, Type Conversion, Operators
// ================================


// ---- Data Types ----

// String
let name = "JavaScript";
console.log(name);
console.log(typeof name);

// Number
let age = 20;
console.log(age);
console.log(typeof age);

// Boolean
let isLearning = true;
console.log(isLearning);
console.log(typeof isLearning);

// Undefined
let city;
console.log(city);
console.log(typeof city);

// Null
let value = null;
console.log(value);
console.log(typeof value); // object (this is a known JS behavior)


// ---- Type Conversion ----

// Automatic Type Conversion
console.log("5" + 2); // "52"
console.log("5" - 2); // 3

// Manual Type Conversion
console.log(Number("10"));   // 10
console.log(String(25));     // "25"
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false


// ---- Operators ----

// Arithmetic Operators
console.log(10 + 5); // Addition
console.log(10 - 5); // Subtraction
console.log(10 * 2); // Multiplication
console.log(10 / 2); // Division

// Comparison Operators
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10); // true
console.log(10 == "10"); // true (checks value only)
console.log(10 === "10"); // false (checks value + type)

// Logical Operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false


// ---- Simple Example ----
let userAge = 18;
console.log(userAge >= 18); // true
