import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { NotificationsKey } from "@/types";

type NotificationsField = Record<NotificationsKey, boolean>;

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email Required "],
            unique: [true, "Email must be Unique"],
        },
        password: {
            type: String,
            default: "no-password",
        },
        name: {
            type: String,
            default: "",
        },
        lname: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: null,
        },
        verified: {
            type: Boolean,
            default: false,
        },
        notifications: {
            type: Object,
            default: {
                // ref NotificationsField
                deals: true,
                newsletter: false,
                offers: true,
                password_changes: true,
                restaurants: true,
                status: true,
            },
        },
        change_count: {
            type: Object,
            default: { password: -1, email: 0, name: 0 },
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next: Function) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 15);
    this.change_count.password += 1;
    next();
});

userSchema.methods.comparePwd = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

function getUser() {
    // ts errors popping up
    if (mongoose.models?.User) return mongoose.models?.User;
    return mongoose.model("User", userSchema);
}

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

// @update after change
export type DBUser = {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    _id: string;
} & {
    name: string;
    email: string;
    phone: string;
    lname: string;
    password: string;
    verified: boolean;
    notifications: NotificationsField;
    change_count: { password: number; email: number; name: number };
};
