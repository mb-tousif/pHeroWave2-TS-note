import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import e from "express";

export const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true,
        unique: true,
     },
    password: {type: String, required: true},
    DOB: { type: String, required: true },
    gender: {
        type: String, required: true,
        enum: ["male", "female"] 
    },
    address: { type: String, required: false },
    phone: { type: Number, required: true },
    role: { 
        type: String, 
        required: true,
        enum: ["admin", "user"]
    }
});

const User = model<IUser>('User', userSchema);

export default User;

