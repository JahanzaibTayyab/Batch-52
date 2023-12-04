let abc = "abcgd";
let num = 235;
if (num == 23) {
  console.log("true");
} else {
  console.log("false");
}

// if else if

let result = 90;

if (result >= 90) {
  console.log("A");
} else if (result >= 80 && result <= 89) {
  console.log("B");
}
// else if()
// else if()
// else if()
// else if()
// if()
// if()
// if()
// if()

// function
// declare
function functionName() {
  console.log("This is function");
  console.log("This is function");
  console.log("This is function");
  console.log("This is function");

  return "This is string";

  console.log("This is function");
  console.log("This is function");
  console.log("This is function");
  console.log("This is function");
}

// always use return end of the function
function sum(num1: number, num2: number) {
  let result = num1 + num2;
  return result;
}

// calling
// functionName();

const functionValue = functionName();
console.log("🚀 ~ file: index.ts:37 ~ functionValue:", functionValue);

console.log(sum(2, 5)); //7
console.log(sum(7, 5)); //12
console.log(sum(7, 15)); //22
// arguments (values)
// return

// prime
function primeNumber(num: number) {
  if (num % 2 !== 0) {
    console.log("This is Not a Prime number", num);
  } else {
    console.log("This is prime number ", num);
  }
}

primeNumber(2); //prime
primeNumber(5); //prime
primeNumber(4); // no
primeNumber(12); //no
primeNumber(16); //no
primeNumber(17); //prime
primeNumber(1002); //no
primeNumber(111); // no
