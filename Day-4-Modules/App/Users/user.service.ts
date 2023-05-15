import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserInDB = async (payload: IUser): Promise<IUser> => {
    // creating a new user
    const user = new User(payload); //User -> class  user -> instance
    await user.save();
    return user;
};

export const getAllUserData = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserById = async (payload: string): Promise<IUser | null> => {
    const user= await User.findById({ _id: payload }, { name: 1, email: 1});
    return user;
};