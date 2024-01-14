// rest parameters ...
// const array1= []
// const array2=[]
// const array3= [...array1,...array2]
function buildName(firstName, ...rest) {
    //Named function with Rest parameters
    return firstName + " " + rest.join(" Khan ");
}
function buildName3(firstName, lastName = "Khan", ...rest) {
    console.log("🚀 ~ buildName3 ~ lastName:", lastName);
    //Named function with Rest parameters
    return firstName + " " + rest.join(" Khan ");
}
var employeeName = buildName3("Joseph");
console.log("🚀 ~ employeeName:", employeeName);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
export {};
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
