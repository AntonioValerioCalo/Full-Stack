const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = "simon";
//person1 viene allocato a person 2 quindi cambiando il valore di person2 viene salvato nello stesso spazio di memoria di person 1 e quindi viene sostituita.
// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);
