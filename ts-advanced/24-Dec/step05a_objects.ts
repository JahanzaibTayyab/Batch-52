// {key:value }

let teacher = {
  name: "Zeeshan",
  experience: "10",
};

// values (dot) .KeyName
// values (square Bracket) ["keyName"]
console.log(teacher.name);
console.log(teacher["experience"]);

// Type Declaration
let student: {
  name: string;
  age: number;
};

student = {
  name: "Hira",
  age: 30,
};

console.log(student["name"]);
console.log(student.age);
