const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

for (const info of Object.keys(person)) {
  console.log(`${info} : ${person[info]}`);
}
