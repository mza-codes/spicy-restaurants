import { randomUUID } from "crypto";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
                    return {
                        email: credentials?.email,
                        id: randomUUID(),
                        name: "PERS0N",
                    };
                } catch (err: any) {
                    console.log("error in authorize () => ", err);
                    throw new Error("Authentication Failed!");
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

export default NextAuth(nextAuth);
