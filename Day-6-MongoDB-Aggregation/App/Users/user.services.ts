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
