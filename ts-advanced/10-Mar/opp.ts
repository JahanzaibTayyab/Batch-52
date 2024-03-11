class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`What's for dinner?`);
  }

  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}

class Chef extends Person {
  occupation: string;

  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }

  speak(): void {
    console.log(`I am a ${this.occupation}`);
  }

  cook() {
    console.log(`I am cooking`);
  }
}

const chef = new Chef("Jahanzaib", 25, "Chef");

const person = new Person("Jahanzaib", 24);
person.speak();
chef.speak();
