"use strict";
// arrays
// let // const
// [] // start with square bracket
//
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "grapes";
let fruit4 = "strawberry";
let fruit5 = "orange";
// [value1,value2,value3,value4]
const fruits2 = [fruit1, fruit2, fruit3, fruit4];
const fruits = [
    "apple",
    "banana",
    "grapes",
    "strawberry",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
];
console.log("🚀 ~ file: array.ts:14 ~ fruits:", fruits);
// value print
// index index start always from 0 (non-negative)
// arrayName[index]
console.log(fruits[4]);
let num1 = 34;
let bool = false;
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("🚀 ~ file: array.ts:30 ~ numArray:", numArray);
console.log(numArray.length);
//methods
// array dynamic // static
// values add / remove
// push , pop
//push
//Appends new elements to the end of an array, and returns the new length of the array.
numArray.push(12);
numArray.push(13);
numArray.push(14);
numArray.push(15);
let newLength = numArray.push(16);
console.log(newLength);
console.log("🚀 ~ file: array.ts:41 ~ numArray:", numArray);
// pop
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
numArray.pop();
console.log("🚀 ~ file: array.ts:51 ~ numArray:", numArray);
numArray.pop();
console.log("🚀 ~ file: array.ts:53 ~ numArray:", numArray);
numArray.pop();
console.log("🚀 ~ file: array.ts:55 ~ numArray:", numArray);
//shift // unshift
//Inserts new elements at the start of an array, and returns the new length of the array.
numArray.unshift(100);
numArray.unshift(200);
numArray.unshift(300);
numArray.unshift(400);
console.log("🚀 ~ file: array.ts:65 ~ numArray:", numArray);
//shift
console.log(numArray.shift());
console.log("🚀 ~ file: array.ts:72 ~ numArray:", numArray);
const names = ["Arslan", "Asad", "Hassan", "Rimi"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
