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
