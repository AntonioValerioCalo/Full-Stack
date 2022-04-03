const person = {
  // ...
  get firstName() {
    return this.first;
  },
  get lastName() {
    return this.last;
  },
  set firstName(name) {
    this.first = name;
  },
  set lastName(name) {
    this.last = name;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const john = Object.create(person);
simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";
simon.firstName = "Simon";
simon.lastName = "Collins";
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
