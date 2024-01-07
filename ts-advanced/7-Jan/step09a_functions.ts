//Note: All parameters are required

//Named function
//parameters optional , minimum 1 ,.. nth
// function body {}
// outside variables calls , use within function
// return optional
function functionName() {}

function add(x: number, y: number): number {
  return x + y;
  let dd;
}

//Anonymous function
let myAdd1 = function (x: number, y: number): number {
  return x + y;
};

// Arrow Functions
// es6 Feature =>
// let / const functionName=()=>{}

//Anonymous function with explict type
let myAdd2: (x1: number, y1: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//type names dont matter

let myAdd3: (base: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
myAdd3(56, 7);
// base 56
// increment 7
// x= 56
// y=7
// return 56+7

//Lambda functions
// arrow functions
// return nai use krty
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  //....
}
