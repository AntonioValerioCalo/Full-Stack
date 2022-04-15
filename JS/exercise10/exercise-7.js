function sumUntil(maxValue) {
  // ...
  let sumValue = [];
  let valuePlus = 0;
  for (let value = 1; value <= maxValue; value++) {
    valuePlus += value;
    sumValue.push("+" + value);
    
  }

  return sumValue + "=" + valuePlus;
}
console.log(sumUntil(5));


let value= 3 > 2 > 1 === false;
console.log(value);
const obj = { foo: 2 }
obj.bar = 4
console.log(obj)