```js
import mongoose from "mongoose";
type Mongoose = typeof mongoose;

const MONGO_URL = process.env.DB;

if (!MONGO_URL) throw new Error("Variable 'DB' not found in env!");

type Mongo = {
    conn: null | Mongoose;
    promise: null | Promise<Mongoose>;
};

type WithMongo = typeof globalThis & {
    _mongoose: {
        conn: null | any;
        promise: null | any;
    };
};

let cached: Mongo = (global as any)._mongoose as Mongo;

if (!cached) {
    cached = (global as WithMongo)._mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGO_URL!, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
```
