const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (persons.find((items) => items.id === id)) {
        resolve(persons.find((items) => items.id === id));
      }
      return reject(new Error(`this person ${id} doesn't sign up`));
    }, 1000);
  });
}

fetchPersonById(4).then((person) => console.log(person));
