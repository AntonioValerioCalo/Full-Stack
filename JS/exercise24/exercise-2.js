const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.values

for (values of Object.values(person)) {
  console.log(`${values}`);
}
