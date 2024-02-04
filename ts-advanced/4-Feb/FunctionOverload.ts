//overloads give us type-checked calls

// function sum(arg1: number, arg2: number);

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string; //option 1
function add(arg1: number, arg2: number): number; //option 2
function add(arg1: boolean, arg2: boolean): boolean; //option 3
function add(arg1: boolean, arg2: string): boolean;
function add(arg1: boolean, arg2: number): boolean;
function add(arg1: boolean, arg2: boolean, arg3: string): boolean;

//this is not part of the overload list,
//so it has only three overloads
function add(arg1: any, arg2: any): any {
  return arg1 + arg2;
}

//function add(arg1: string, arg2: string, arg3: string, arg4: string): string;

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));

add(false, "f");
