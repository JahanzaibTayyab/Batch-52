//Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return `${firstName} ${lastName}`;
  else return firstName;
}

let result1 = buildName("Bob"); //ok
//let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
const result3 = buildName("Bob", "Adams"); //also ok // Bob Admas

//anonymous function type with optional parameters
// const functionName=(parameters)=>(parameters)
// const functionName=(parameters)=>{ return parameters}

const buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};

export {};
