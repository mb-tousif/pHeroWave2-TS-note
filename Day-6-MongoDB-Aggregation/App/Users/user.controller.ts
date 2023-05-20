import { RequestHandler } from "express";
import User from "./user.model";
import { postBulkUsers, postUserInDB,getAllUsersData, getNewYorkUsers, getUsersFavoriteMovie, getSortedUsersByAge, updateUsersZipCode } from "./user.services";
import { INYUser } from "./user.interface";

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
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json(error);
    }
}


// Task 1 -> Solution
export const getNYUsers: RequestHandler = async (req, res) => {
    try {
        const users = await getNewYorkUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Task 2 -> Solution
export const getUserMovies: RequestHandler = async (req, res) => {
    try {
        const movies = await getUsersFavoriteMovie();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Task 3 -> Solution
export const getSortedUsers: RequestHandler = async (req, res) => {
    try {
        const users = await User.find({"favorites.food":{$eq: "pizza"}}).sort({age: 1})
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json(error);
}
}

// Task 4 -> Solution
export const getAgeOver30Users: RequestHandler = async (req, res) => {
    try {
        const users = await getSortedUsersByAge();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Task 5 -> Solution
export const getShawShankUsers: RequestHandler = async (req, res) => {
    try {
        const users = await User.aggregate([
            {
                $match: {
                    "favorites.movie": "The Shawshank Redemption"
                }
            },
            {
                $count: "users"
            }
        ]);
        res.status(200).send(`<h1>${users[0].users} Users like <em>The Shawshank Redemption</em> Movie</h1>`);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Task 6 -> Solution
export const updateUserByEmail: RequestHandler = async (req, res) => {
    try {
        const user = await updateUsersZipCode();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Task 7 -> Solution
export const deleteUserByEmail: RequestHandler = async (req, res) => {
    try {
        const user = await User.deleteOne({email: "alicewilliams@example.com"})
        res.status(200).send(user);
    } catch (error) {   
        res.status(500).json(error);
    }
}