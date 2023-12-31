// Implicit type casting
// let result = "3" + 3
// Explicit type casting
// explicitly change the type of a value from one type to another
// dynamic data, or when the type of a value is not correctly inferred automatically
let myname = "Zia";
console.log(myname.length); //Using ‘as’ keyword
console.log(myname.length); // Bracket Syntax: <>
let input;
input = 3;
input = "Khan";
if (typeof input == "number") {
    console.log(input.toFixed(2));
}
else {
    console.log(input.toUpperCase);
}
// Typecasting operates purely at compile-time and does not perform any runtime checks.
// This means that if the casted type is incorrect, it may result in runtime errors.
// So, it is crucial to ensure the correctness of the type being cast.
// You can't type cast non-related types e.g. string to number or number to string; workaround = force casting
let x = 4;
// console.log((x as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
console.log(x.length); // force casting
export {};
