import type { Connection } from "mongoose";
import { createConnection } from "mongoose";

let conn: Connection;

export default function createDBConnection(uri: string) {
    if (conn) {
        return conn;
    }

    conn = createConnection(uri, {
        appName: "spicy-restaurants",
        dbName: "spicy-next",
    });
    return conn;
}
