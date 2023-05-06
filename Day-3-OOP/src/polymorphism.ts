// Polymorphism is the ability of an object to take on many forms.The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

// Example: 1

class Developer {
    getSalary(): void {
        console.log('I am getting $400 salary as a developer');
    }
}
class Designer extends Developer {
    getSalary(): void {
        console.log('I am getting $300 salary as a designer');
    }
}

function getSalary(employee: Developer | Designer) {
    employee.getSalary();
}

getSalary(new Developer());
getSalary(new Designer());

// Example: 2

class Shape {
    getArea(): number| string {
        return 0;
    }
}

class Circle extends Shape {
    // radius: number;
    // constructor(radius: number) {
    //     super();
    //     this.radius = radius;
    // }
    constructor(public radius: number) {
        super();
    }
    getArea(): string {
        return (Math.PI * this.radius**2).toFixed(2); // 314.16
    }
}

class Rectangle extends Shape {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //     super();
    //     this.width = width;
    //     this.height = height;
    // }
    constructor(public width: number, public height: number) {
        super();
    }
    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);
console.log(circle.getArea());
console.log(rectangle.getArea());




