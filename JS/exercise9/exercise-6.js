function getKeys(obj) {
  // ...
  //console.log(Object.keys(person));
  let keyWord = [];
  for (item in obj) {
    keyWord.push(`${item}`);
  }
  return keyWord;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
