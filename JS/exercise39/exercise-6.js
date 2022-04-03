class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  // ...
  static calculate(value) {
    if (value instanceof Square) {
      return value.side * value.side;
    }
    if (value instanceof Rectangle) {
      return value.width * value.height;
    }
    if (value instanceof Circle) {
      return value.radius * value.radius;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
