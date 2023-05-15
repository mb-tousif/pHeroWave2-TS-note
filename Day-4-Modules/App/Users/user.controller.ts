import { RequestHandler } from "express";
import User from "./user.model";
import { createUserInDB, getAllUserData, getUserById } from "./user.service";

export const createUser: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;
        const user = await createUserInDB(payload);
        res.status(201).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllUsers: RequestHandler = async (req, res) => {
    try {
        const users = await getAllUserData();
        res.status(200).json({
            message: "All users fetched successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getSingleUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getUserById(id);
        res.status(200).json({
            message: "User fetched successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json(error);
    }
}