// Abstraction in TypeScript is the process of hiding the internal implementation details and showing only the functionality to the users.In TypeScript, abstraction can be achieved by using interfaces.
// Example: 1

// By Interface
interface IVehicle {
    name: string;
    start(): void;
    stop(): void;
}
class Vehicle implements IVehicle {
    constructor(public name: string) { }
    start(): void {
        console.log(`${this.name} started`);
    }
    stop(): void {
        console.log(`${this.name} stopped`);
    }
}
const vehicle = new Vehicle('BMW');
vehicle.start();
vehicle.stop();

// By Abstract Class
abstract class Vehicle1 {
    constructor(public name: string) { }
    abstract start(): void;
    abstract stop(): void;
    test(): void {
        console.log(`${this.name} tested`);
    }
}

class Car extends Vehicle1 {
    constructor(public name: string) {
        super(name);
    }
    start(): void {
        console.log(`${this.name} started`);
    }
    stop(): void {
        console.log(`${this.name} stopped`);
    }

}
const car = new Car("Mercedes");
car.start();
car.stop();
car.test();