// Any
// top type/universal supertype
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// perform any operation we want on values of type any
let myval;
myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
// myval = undefined; // OK
// myval = () => {
//   console.log("Hey again!");
// }; // OK
// myval.toUpperCase(); // OK
//const val1: unknown = myval; // OK
//const val2: any = myval; // OK
// const val3: boolean = myval;
// const val4: number = myval;
// const val5: string = myval;
// const val6: Record<string, any> = myval;
// const val7: any[] = myval;
const val8 = myval;
// function fn(s) {
//   // No error?
//   console.log(s.subtr(3));
// }
// fn(42);
// ---------------------------
//Unknown
// another top type
// All value can be assigned to a variable of type unknown.
let value;
value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => {
    console.log("Hey again!");
}; // OK
// Assigning a value of type unknown to variables of other types
// only a container that is capable of holding values of arbitrary types
// can hold a value of type unknown; after all, we don't know anything
// about what kind of value is stored in val
// we've flipped the default from permitting everything to permitting (almost) nothing.
let val;
const val1 = val; // OK
const val2 = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = value; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
// ---------------------------
// Never
// bottom type
// Function returning never must not have a reachable end point
// the values that will never occur
// never is the empty set
// The empty set can fit inside any other set, so never is a subtype of every other type
function error(message) {
    throw new Error(message);
}
let neverval = error("Messafe");
// console.log(
//   "🚀 ~ file: step05f_any__unknown_never_types.ts:83 ~ neverval:",
//   neverval
// );
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
export {};
