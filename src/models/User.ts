import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
        verified: {
            type: Boolean,
            default: false,
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

const model = mongoose.model("User", userSchema);
type USER = typeof model;

function getUser(): USER {
    return mongoose.models?.["User"] ?? model;
}

const User = getUser();

export default User;
