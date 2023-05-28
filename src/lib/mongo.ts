import mongoose from "mongoose";

type Connection = {
    connected: boolean;
};

const connection = {} as Connection;
const MONGO_URL = process.env.DB;

if (!MONGO_URL) throw new Error("Variable 'DB' not found in env!");

// export default function createDBConnection() {
//     if (connection?.connected) {
//         console.log("Already Connected!");
//         return;
//     }
//     mongoose;
// }

export const connectDB = async () => {
    console.log("Connecting DB =>>", mongoose.connection.readyState);
    if (mongoose.connection.readyState >= 1) return;
    try {
        await mongoose.connect(MONGO_URL, {
            appName: "spicy",
            dbName: "spicy-next",
        });
        console.log("MongoDB Connection Success!");
    } catch (err: any) {
        console.log("ERROR CONNECTING MONGODB", err);
        throw new Error("Mongoose Connection Failed");
    }
};
