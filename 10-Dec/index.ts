// array (100)
// print
//console.log(array[0])
//console.log(array[1])
//console.log(array[2])
//console.log(array[3])
//console.log(array[4])
//console.log(array[5])

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

fruits.splice(
  9,
  0,
  "apple",
  "banana",
  "grapes",
  "strawberry",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange"
);

for (let x = 0; x < fruits.length; x++) {
  console.log(fruits[x]);
}

// step1 x=0 ;condition (true)  // body // conditionUpdate

//x=0 true apple x++ // x=0+1// x=1
//x=1 true banana x++ // x=2
//x=2 true grapes x++ // x=2+1//3
//x=3 true strawberry x++ //x=3+1//4
//x=4 true orange x++ //x=4+1//5
//x=5 true orange x++ //x=5+1//6
//x=6 true orange x++ //x=6+1//7
//x=7 true orange x++ //x=7+1//8
//x=8 true orange x++ // x=8+1//9
//x=9 false
// loop terminate

export {};
