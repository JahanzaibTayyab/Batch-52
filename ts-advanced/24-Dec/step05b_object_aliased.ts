// anonymous

// let teacher: { name: string; exp: number } = { name: "Zeeshan", exp: 10 };
// let teacher2: { name: string; exp: number } = { name: "Zeeshan2", exp: 10 };
// let teacher3: { name: string; exp: number } = { name: "Zeeshan3", exp: 10 };
// let teacher4: { name: string; exp: number } = { name: "Zeeshan4", exp: 10 };

type Teacher = {
  name: string;
  exp: number;
};

let teacher: Teacher = { name: "Zeeshan", exp: 10 };
let teacher2: Teacher = { name: "Zeeshan2", exp: 10 };
let teacher3: Teacher = { name: "Zeeshan3", exp: 10 };
let teacher4: Teacher = { name: "Zeeshan4", exp: 10 };

// Aliased Object Type
// type interface
type Student = {
  name: string;
  age?: number;
};

let student: Student = {
  name: "Hira",
  age: 30,
};

let student2: Student = {
  name: "Hira",
};

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
  name: string;
  subordiates?: number;
}

let storeManager: Manager = {
  name: "Bilal",
};
