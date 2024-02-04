"use strict";
var f;
f = (x) => "(" + x + ")";
var h;
h = [];
h.push(f);
console.log(h[0]("h"));
//1// Error
//2  h
//3 x
// f
// (h)
