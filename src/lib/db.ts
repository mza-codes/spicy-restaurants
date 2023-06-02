import User, { DBUser } from "@/models/User";
import { SignupData } from "@/types";

type Nullable<T> = T | null;

export const db = {
    async fetcher<T = any>(request: Promise<T>): Promise<[Nullable<any>, Nullable<T>]> {
        try {
            const data = await request;
            return [null, data];
        } catch (error: any) {
            return [error, null];
        }
    },
    async createUser(data: SignupData): Promise<[Nullable<any>, Nullable<DBUser>]> {
        let [err, user] = await this.fetcher<DBUser>(
            User.findOne({ email: data.email }).select("-password")
        );

        if (user) {
            err.message = "User Exists, Please Login!";
            return [err, null];
        }

        return await this.fetcher<DBUser>(User.create(data));
    },
    async updateUser(_id: string, data: Partial<DBUser>): Promise<[any, any]> {
        const [err, user] = await this.fetcher(
            User.findByIdAndUpdate(_id, data, { new: true })
        );
        console.log("@user updated () => \n", { data, _id, user });

        return [err, user];
    },
};
