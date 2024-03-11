"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
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
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
    speak() {
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
