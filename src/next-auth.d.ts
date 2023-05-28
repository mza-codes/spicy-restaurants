import { DBUser } from "@/models/User";
import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: DBUser;
    }
}
