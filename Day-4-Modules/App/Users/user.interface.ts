
export interface IUser {
    name: string;
    email: string;
    password: string;
    DOB: Date|string;
    gender: "male" | "female";
    address?: string;
    phone: number;
    role: "admin" | "user";
}

// Example :
const user: IUser = {
    name: "John Doe",
    email: "johnDoe@gmail.com",
    password: "123456",
    DOB: "1990-01-01",
    gender: "male",
    address: "Kathmandu",
    phone: 9876543210,
    role: "admin"
}