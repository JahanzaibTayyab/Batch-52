// rest parameters ...
// const array1= []
// const array2=[]
// const array3= [...array1,...array2]
function buildName(firstName: string, ...rest: string[]) {
  //Named function with Rest parameters
  return firstName + " " + rest.join(" Khan ");
}

function buildName3(
  firstName: string,
  lastName = "Khan",
  abc?: string,
  ...rest: string[]
) {
  console.log("🚀 ~ buildName3 ~ lastName:", lastName);
  //Named function with Rest parameters
  return firstName + " " + rest.join(" Khan ");
}

var employeeName = buildName3("Joseph", "ABC");
console.log("🚀 ~ employeeName:", employeeName);

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + " " + restOfName.join(" ");
};

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
