import User, { DBUser } from "@/models/User";
import { SignupData } from "@/types";

export const db = {
    async createUser(data: SignupData): Promise<[any, any]> {
        let [err, result]: [any, any] = [null, null];
        try {
            const user = await User.findOne({ email: data.email }).select("-password");
            if (user || user?._id) throw new Error("User Exists, Please Login!");

            const newUser = await User.create(data);
            result = newUser;
        } catch (error: any) {
            err = error;
        } finally {
            return [err, result];
        }
    },
    async updateUser(_id: string, data: Partial<DBUser>): Promise<[any, any]> {
        let [err, result]: [any, any] = [null, null];
        try {
            const user = await User.findByIdAndUpdate(_id, data, { new: true });
            console.log("@user updated () => \n", { data, _id, user });

            result = user;
        } catch (error: any) {
            err = error;
        } finally {
            return [err, result];
        }
    },
};
