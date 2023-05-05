class Developer {
    constructor(public position: string, public experience: number, public salary: number) {}

    getDetails(): string {
        return `I am a ${this.position} developer with ${this.experience} years of experience and my salary is ${this.salary}`;
    }
}

class Engineer extends Developer {
    constructor( position: string,  experience: number,  salary: number, public role?: string) {
        super(position, experience, salary);
        this.role = role;
    }
    getEngineerRole(): string {
        return `I am a ${this.role} engineer`;
    }
    getEngineerWorkingHours(hours: number): string {
        return `${this.position} work ${hours} hours a day`;
    }   
}

const engineer = new Engineer('Software Engineer', 5, 10000, "DevOps");
const webDeveloper = new Developer('MERN Developer', 5, 100000);
console.log(webDeveloper.getDetails());
console.log(engineer.getEngineerWorkingHours(8));
console.log(engineer.getDetails());
console.log(engineer.getEngineerRole());
