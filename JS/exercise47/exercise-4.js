const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

for ([keys, item] of Object.entries(person)) {
  console.log(`${keys}: ${item}`);
}
