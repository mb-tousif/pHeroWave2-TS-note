import mongoose, { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new  Schema <IUser>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        trim: true,
    },
    salary: {
        type: Number,
        required: [true, "Salary is required"],
        trim: true,
    },
    address: Object({
        street: {
            type: String,
            required: [true, "Street is required"],
            trim: true,
        },
        city: {
            type: String,
            required: [true, "City is required"],
            trim: true,
        },
        state: {
            type: String,
            required: [true, "State is required"],
            trim: true,
        },
        zipCode: {
            type: String,
            required: [true, "Zip Code is required"],
            trim: true,
        },
    }),
    favorites: Object({
        color: {
            type: String,
            required: [true, "Color is required"],
            trim: true,
        },
        food: {
            type: String,
            required: [true, "Food is required"],
            trim: true,
        },
        movie: {
            type: String,
            required: [true, "Movie is required"],
            trim: true,
        },
    }),
    friends: [
        {
            name: {
                type: String,
                required: [true, "Friend's Name is required"],
                trim: true,
            },
            email: {
                type: String,
                required: [true, "Friend's Email is required"],
                trim: true,
            },
        },
    ],
});

const User = model<IUser>("User", userSchema);

export default User;



