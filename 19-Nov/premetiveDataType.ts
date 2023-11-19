//string
let firstName = "Jahanzaib";
console.log("🚀 ~ file: premetiveDataType.ts:3 ~ firstName:", firstName);

//number
let abc = 23;
console.log("🚀 ~ file: premetiveDataType.ts:7 ~ abc:", abc);
// boolean
let bool = false;
console.log("🚀 ~ file: premetiveDataType.ts:10 ~ bool:", bool);

//undefined
let zx;
console.log("🚀 ~ file: premetiveDataType.ts:14 ~ zx:", zx);

//null
let nullVar = null;
console.log("🚀 ~ file: premetiveDataType.ts:18 ~ nullVar:", nullVar);

//implicit type
// based on assigned value in a variable

let first_name = "Jahanzaib";
first_name = "23";
let number_value = 23;
number_value = 1234;

//explicit case

let fist_Name: string = "Jahanzaib";
let lastName: string = "Tayyab";

//template literals
console.log("My name is ", fist_Name);

// My firstName is:  and last name is:
console.log("My firstName is:" + fist_Name + " and last name is:" + lastName);

console.log(`My firstName is ${fist_Name} and last is ${lastName}`);

//Q3
let author = "abc";

console.log(`One a author said: ${author} dfwghjdkl;w'dwhjkml`);

console.log(typeof author);

//Operators

// Arithmetic Operator (+ , - , * , /)
let n1 = 12;
let n2 = 13;
let result;
result = n1 + n2;
console.log("Result", result);
result = n1 - n2;
console.log("Result", result);
result = n1 * n2;
console.log("Result", result);
result = n1 / n2;
console.log("Result", result);

let n3 = "12";
let n4 = "13";
result = n3 + n4;
console.log("Result", result);
// result = n3 - n4;
// console.log("Result", result);
// result = n3 * n4;
// console.log("Result", result);
// result = n3 / n4;
// console.log("Result", result);

//assignment operator (=)
let n6 = 23;
n6 = n6 + 6; //29
// short  way
n6 += 6; //35

n6 = n6 - 6; //29
n6 -= 6; //23

//console.log(10 % 3);

// comparison operator
let n = 5;
console.log(n == 5); // true // value check
console.log(n === 5); //true // value + data type check
console.log(n != 5); //false
console.log(n > 8); //false
console.log(n < 8); //true
console.log(n >= 8); //false
console.log(n <= 8); //true

//OR Gate
// T T T
// T F T
// F T T
// F F F

//And Gate
// T T T
// T F F
// F T F
// F F F

//Not gate
// T F
// F T
//n =5
console.log(n >= 5 && n < 10); //T T T (And Condition &&)
console.log(n > 5 && n < 10); //F And T F
console.log(n >= 5 || n < 10); //(OR ||) T OR  T T
console.log(n > 5 || n < 10); //F OR T T
console.log(!(n < 10)); //false
console.log(!(n > 10)); //true
