type fType = (x: string) => string;
let f: fType = (x) => "(" + x + ")";
let stringArray: string[];
let h1: fType[];
var h: ((x: string) => string)[];
h = [];
h1 = [];
h.push(f);
h1.push(f);
console.log(h[0]("h"));

//1// Error
//2  h
//3 x
// f
// (h)

//var myFunction = (f) => (this.x = "x");

var a: string = "";

//
