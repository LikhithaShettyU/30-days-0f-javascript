// ===============================
// Day 4 - JavaScript Loops
// for, while, do-while, break, continue
// ===============================


// ---------- for loop ----------
// Used when we know how many times to repeat

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// ---------- for loop with break ----------
// Stops the loop when condition is met

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}


// ---------- for loop with continue ----------
// Skips the current iteration

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}


// ---------- while loop ----------
// Used when number of repetitions is unknown

let a = 1;

while (a <= 5) {
  console.log(a);
  a++;
}


// ---------- while loop with break ----------

let b = 1;

while (b <= 5) {
  if (b === 4) {
    break;
  }
  console.log(b);
  b++;
}


// ---------- while loop with continue ----------

let c = 0;

while (c < 5) {
  c++;
  if (c === 3) {
    continue;
  }
  console.log(c);
}


// ---------- do-while loop ----------
// Runs at least once

let d = 1;

do {
  console.log(d);
  d++;
} while (d <= 5);


// ---------- do-while proof (runs once even if false) ----------

let e = 10;

do {
  console.log("This runs at least once");
} while (e < 5);


// ===============================
// End of Day 4
// ===============================
