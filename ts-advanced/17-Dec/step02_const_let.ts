//use const where variable values do not change
const a = 5;
const b: number = 33;
const c = "best";
//let z = "Functional Scope";
let abc = "Random";

//I suggest use let instead of var everywhere,
//becuase let has blocked scope
if (true) {
  let z = 4;
  let abc = "fghj";
  console.log(abc);
  console.log("🚀 ~ file: step02_const_let.ts:10 ~ z:", z);
  abc = "Random String";
  //use z
} else {
  let z = "string";
  //use z
}
console.log(abc);
//console.log("let: " + z); // Error: z is not defined in this scope

export {};
