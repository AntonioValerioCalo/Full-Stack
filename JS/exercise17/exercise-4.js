function calculate() {
  // ...
  let sum = 0;
  return {
    add(sumAll) {
      sum += sumAll;
      return this;
    },
    multiply(sumAll) {
      sum *= sumAll;
      return this;
    },
    sub(sumAll) {
      sum -= sumAll;
      return this;
    },
    divide(sumAll) {
      sum /= sumAll;
      return this;
    },
    printResult() {
      console.log(sum);
    },
  };
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7

console.log(calculate());
