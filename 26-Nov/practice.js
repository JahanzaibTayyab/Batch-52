"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//condition
let num = 6;
// condition (L.H.S == R.H.S) true //false
//if (){}
//else (optional)
// multiple conditions
// if ()
// else  if()
// else if()
// else if()
// else if()
// else {}
// comes here
// if (){}
//  if(){}
//  if(){}
//  if(){}
//  if(){}
if (num % 2 == 0) {
    console.log("It is Even");
}
else {
    console.log("It is odd");
}
// nested if else
// if(condition){
//  console.log('This is nested condition')
//  if(condition){
//     if condition(){
//         console.log('Nested Condition');
//     }
//     else
//  }
// }
// else {
// }
// let a = "a";
// if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u")
//   if (a == ("a" || "e" || "i" || "o" || "u"))
// if(a=='a')
// else if()
let age = 10;
let firstName = "Jahanzaib";
let country = "pakistan";
if (age > 19) {
    console.log("Adult");
    if (country == "Pakistan") {
        console.log(`Hello ${firstName}, You are from Pakistan`);
    }
    else {
        console.log(`Hello ${firstName}`);
    }
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Child");
}
//Functions
// name Function
// arrow function (latest Syntax) (ES6 Feature)
// name Function
// pass values to a function (parameters)
function functionName() { }
// declaring a function named greet()
function greet() {
    console.log("Hello there");
    console.log("hy i am function");
}
console.log("hy i am outSide function");
// function calling
// functionName()
greet();
// passing value to the function
function greet2(name) {
    console.log("Hello there greet2", name);
}
greet2("Jahanzaib");
greet2("Sir Zia");
greet2("Sir Aksam");
greet2("Sir Qasim");
// calculator
let n1 = 4;
let n2 = 5;
function sum(num1, num2) {
    console.log(num1 + num2);
}
function subtract(num1, num2) {
    console.log(num1 - num2);
}
function multiple(num1, num2) {
    console.log(num1 * num2);
}
sum(5, 9);
sum(6, 3);
multiple(2, 4);
multiple(2, 7);
sum(6, 13, 89);
