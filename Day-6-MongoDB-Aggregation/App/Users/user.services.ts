import { INYUser, IUser, IUserMovie } from "./user.interface";
import User from "./user.model";

// post bulk data to users collection
export const postBulkUsers = async (payload: IUser[]): Promise<IUser[]> => {
    const users = await User.insertMany(payload);
    return users;
};

// single user data post to users collection
export const postUserInDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload); //User -> class  user -> instance
    await user.save();
    return user;
};

// get all users data from users collection
export const getAllUsersData = async (): Promise<IUser[] | string> => {
    const users = await User.find();
    if(users.length === 0){
        return `<h3>No users found in the database 😞</h3>`
    };
    return users;
}

// Get New York Users
export const getNewYorkUsers = async (): Promise<INYUser[] | string> => {
    const users = await User.find({ "address.state": "NY" }).select({ name: 1, email: 1})
    if(users.length === 0){
        return `<h3>No users found in the database 😞</h3>`
    };
    return users as INYUser[];
}

// Get Users Favorite Movie by email
export const getUsersFavoriteMovie = async (): Promise<IUserMovie | string> => {
    const users = await User.find({ email: "johndoe@example.com" }).select({ "favorites.movie": 1, _id: 0})
    if(users.length === 0){
        return `<h3>No users found in the database 😞</h3>`
    }
    return users[0].favorites as IUserMovie;
}

// Get Users by Age and Favorite Color
export const getSortedUsersByAge = async (): Promise<INYUser[] | string> => {
    const users = await User.find({age: {$gt: 30}, "favorites.color": {$eq:"green"}}).select({name: 1, email: 1, age: 1, _id: 0}).sort({age: 1})
        // const users = await User.find({age: {$gt: 30, $lt: 40}}).select({name: 1, email: 1, age: 1, _id: 0})
    if(users.length === 0){
        return `<h3>No users found in the database 😞</h3>`
    }
    return users as INYUser[];
}

// Update User address.zipCode by email
export const updateUsersZipCode = async (): Promise<IUser | string> => {
    const user = await User.updateOne({email: "johndoe@example.com"}, {$set: {"address.zipCode": "10006"}})
    if(user.modifiedCount ===0){
        return `<h3>No users did not update in the database 😞</h3>`
    }
    return user as IUser | any;
}