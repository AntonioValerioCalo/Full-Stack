function Person(firstName, lastName) {
  // ...
  this.firstName = firstName;
  this.lasName = lastName;
  this.fullName = () => {
    return `${firstName} ${lastName}`;
  };
}

john = new Person("John", "Doe");
simon = new Person("Simon", "Collins");
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
