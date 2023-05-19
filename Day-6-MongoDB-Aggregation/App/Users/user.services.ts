import { IUser } from "./user.interface";
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
export const getAllUsersData = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}