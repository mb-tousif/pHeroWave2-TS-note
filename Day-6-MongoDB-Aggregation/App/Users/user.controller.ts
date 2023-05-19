import { RequestHandler } from "express";
import User from "./user.model";
import { postBulkUsers, postUserInDB,getAllUsersData } from "./user.services";

// post bulk data to users collection
export const postBulkData: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;
        await postBulkUsers(payload);
        res.status(201).json({
            message: "Bulk data 🐘 inserted successfully"
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

// single user data post to users collection
export const postUserData: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;
        await postUserInDB(payload);
        res.status(201).json({
            message: "User data 😻 inserted successfully"
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

// get all users data from users collection
export const getAllUsers: RequestHandler = async (req, res) => {
    try {
        const users = await getAllUsersData();
        res.status(200).json({data:users});
    } catch (error) {
        res.status(500).json(error);
    }
}
