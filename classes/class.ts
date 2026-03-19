class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I'am ${this.name}`;
  }
}

const person1 = new Person("Muzamil", 22);
console.log(person1.greet());
// A constructor is a special function inside a class that runs automatically when you create an object.