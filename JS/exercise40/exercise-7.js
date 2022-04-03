class Person {
  // ...
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstName() {
    return this.first;
  }
  get lastName() {
    return this.last;
  }
  get newAge() {
    return this.age;
  }
  get fullName() {
    return `${this.first} ${this.last} ${this.age}`;
  }
  set firstName(newName) {
    this.first = newName;
  }
  set lastName(newName) {
    this.last = newName;
  }
  set newAge(age) {
    this.age = age;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
