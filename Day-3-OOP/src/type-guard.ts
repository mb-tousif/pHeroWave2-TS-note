// Keyof Guard

type Guard = string | number
function sum (a: Guard, b: Guard):Guard {
    if (typeof a === 'string' || typeof b === 'string') {
        return `${a} or ${b} are strings`
    }
    return a + b
}
console.log(sum(1, 2))
console.log(sum('1', '2'))

//In Guard

type Person = {
    name: string,
}

type Programmer = {
    name: string,
    // role: string
    role: "Frontend" | "Backend" | "Fullstack"
}

function getUser(user: Person | Programmer) {
    if ('role' in user) {
        console.log(`${user.name} is a ${user.role} developer`)
    } else {
        console.log(`${user.name} is a person`)
    }
}

getUser({name: 'Mike'})
// getUser({name: 'Doe', role: 'singer'})
getUser({name: 'John', role: 'Fullstack'})

// Instanceof Guard

class Car {
   constructor(public name: string, public model: string, public price?: number) {};
   drive() {
         console.log(`I am driving ${this.name} ${this.model}`)
    };
}

class BMW extends Car {
    constructor(name: string, model: string, price: number, public color: string = 'red') {
        super(name, model, price);
    }
    driveBMW() {
        console.log(`I am driving ${this.name} ${this.model} ${this.color}`)
    }
}

class Mercedes extends Car {
    constructor(name: string, model: string, price: number, public color?: string) {
        super(name, model, price);
    }
    driveMercedes() {
        console.log(`I am driving ${this.name} ${this.model} ${this.color}`);
    }
};

function driveCar(car: Car) {
    if (car instanceof BMW) {
        car.driveBMW();
    } else if (car instanceof Mercedes) {
        car.driveMercedes();
    } else {
        car.drive();
    }
}

const bmw = new BMW('BMW', 'X5', 100000); // instance of BMW
const mercedes = new Mercedes('Mercedes', 'C-Class', 100000, 'Green'); // instance of Mercedes
const car = new Car('Toyota', 'Corolla'); // instance of Car
bmw.driveBMW();
mercedes.driveMercedes();
car.drive();