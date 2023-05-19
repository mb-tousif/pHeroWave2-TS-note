// Objective: Define the user interface
  export interface IUser {
    name: string;
    email: string;
    age: number;
    salary: number;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
    favorites: {
        color: string;
        food: string;
        movie: string;
    };
    friends: {
        name: string;
        email: string;
    }[];
}

export interface INYUser {
    name: string;
    email: string;
    age?: number;
}

export interface IUserMovie {
    movie: string;
}