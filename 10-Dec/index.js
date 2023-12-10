"use strict";
// array (100)
// print
//console.log(array[0])
//console.log(array[1])
//console.log(array[2])
//console.log(array[3])
//console.log(array[4])
//console.log(array[5])
Object.defineProperty(exports, "__esModule", { value: true });
// for(startingCondition;endingCondition;updateCondition)
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
// x++ increment x=x+1
// x-- decrement x=x-1
// condition = 9
for (let x = 0; x < fruits.length; x++) {
    console.log(fruits[x]);
}
fruits.splice(9, 0, "apple", "banana", "grapes", "strawberry", "orange", "orange", "orange", "orange", "orange");
for (let x = 0; x < fruits.length; x++) {
    console.log(fruits[x]);
}
