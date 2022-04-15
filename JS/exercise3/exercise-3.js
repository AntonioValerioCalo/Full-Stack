const students = ["Paul", "George", "Lucas"];

function addStudent(student) {
 return students.push(student)
}

addStudent("Marco");
console.log(Object.entries(students));
// è possibile modificare la variabile Readonly perchè è un array e questo permette di aggiungere e modificare.