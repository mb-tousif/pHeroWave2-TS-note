// Normally we use class to create object in typescript and javascript. 
class WebDeveloper {
    stack: string;
    experience: number;
    salary: number;

    constructor(stack: string, experience: number, salary: number) {
        this.stack = stack;
        this.experience = experience;
        this.salary = salary;
    }

    getStack(): string {
        return `I am a ${this.stack} developer with ${this.experience} years of experience and my salary is ${this.salary}`;
    }
}

const developer = new WebDeveloper('MEAN', 5, 100000);
console.log(developer.getStack());