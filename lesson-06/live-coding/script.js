// Gibt Hello aus
// alert("hello"); // gibt hello aus

/**
 * Hier beginnt ein neuer Block
 *
 */
let books = "Harry Potter, asjhdsa ajksdkjhsa haskdjk";
let message = "Hello World";
let message2 = "Hello Basti";

alert(books);

books = "Effective JavaScript";

alert(books);

const DAYS_OF_WEEK = 7;
const HOURS_OF_DAY = 24;

const PASSWORD = "*********"; // TODO aus <input> auslesen

/**
 * Rechnen
 */

let a = 5;
let b = 6;

let add = a + b; // 11
let sub = a - b; // -1
let mul = a * b; // 30
let div = a / b; // 0.83333

let complex = a * (b - 3 + 50 / a); // 65

let c = 1 / 0; // Infinity

alert(c);

/**
 * Bedingungen
 */
let price;
const age = 70; // TODO irgendwie einlesen

const AGE_CHILD = 16;
const AGE_OLD = 67;

if (age < AGE_CHILD) {
  // Kinder bekommen einen Rabatt
  price = 2;

  //   alert("Du bist ein Kind");
} else if (age > AGE_OLD) {
  // Rentner bekommen Rabatt
  price = 5;

  //   alert("Du bist alt");
} else {
  price = 20;
}

alert(price);

/**
 * Funktionen
 */

console.log("Hier startet der Block ueber Funktionen");

function showMessage(input) {
  let message = "Hallo " + input;

  console.log("Hier sind wir in der showMessage Funktion", input);

  // TODO show in HTML

  alert(message);
}

function addieren(a, b, c) {
  let ergebnis = a + b + c;

  return ergebnis;
}

showMessage("Basti");
showMessage("Nils");
showMessage("Daniel");

let er = addieren(5, 5, 5);

alert(er);

console.log(er);
