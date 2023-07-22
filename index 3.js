class Shape {
    constructor(name) {
      this.name = name;
    }
    getArea() {
      console.log('Метод getArea() реализуется в подклассах');
    }
  }
  
  class Circle extends Shape {
    P = 3.14;
    constructor(name, radius) {
      super(name);
      this.radius = radius;
    }
    getArea() {
      console.log(this.P * this.radius ** 2);
    }
  }
  
  class Rectangle extends Shape {
    constructor(name, width, height) {
      super(name);
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      console.log(this.width * this.height);
    }
  }
  
  const circle = new Circle('circle', 5);
  const rectangle = new Rectangle('rectangle', 5, 4);
  
  circle.getArea();
  rectangle.getArea();