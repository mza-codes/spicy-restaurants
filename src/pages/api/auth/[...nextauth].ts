import User from "@/models/User";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongo";

export const authCookie = `_sa_spicy_.app` as const;
const isProduction = process.env.NODE_ENV === "production";

const nextAuth: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "user@domain.cc" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                console.log("async authorize(): ", { credentials, req });
                try {
                    const { email, password } = credentials as {
                        email: string;
                        password: string;
                    };
                    const user = await User.findOne({ email: email });
                    if (!user || !email || !password)
                        throw new Error("User does not exist!");

                    if (await bcrypt.compare(password, user?.password)) {
                        console.log("Final USER () =>", user);
                        return user?._doc;
                    }
                    throw new Error("Invalid Credentials");
                } catch (err: any) {
                    console.log("error in authorize () => ", err);
                    throw new Error(err?.message || "Authentication Failed!");
                }
            },
        }),
    ],
    secret: "__-Olhfdhs@_p&dv_78ffrr@_plm&dv_&6ghJ",
    pages: {
        signIn: `/login`,
        signOut: "/login",
        // newUser: "",
        // error: "",
        // verifyRequest: "/verify",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn(params) {
            console.log("@SignIn params => ", params);
            return true;
        },
        jwt: async ({ user, token, account }) => {
            // @ts-ignore
            const payload = { ...token, ...user };

            console.log("@jwt => ", payload);
            return payload;
        },
        session({ session, token, user }) {
            // @ts-ignore
            session.user = token;
            return session;
        },
    },
    cookies: {
        sessionToken: {
            name: authCookie,
            options: {
                sameSite: "strict",
                path: "/",
                secure: isProduction,
            },
        },
    },
    debug: !isProduction,
};

connectDB();
export default NextAuth(nextAuth);
