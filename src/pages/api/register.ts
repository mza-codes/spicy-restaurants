import { db } from "@/lib/db";
import { SignupData } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        console.log(req.body);
        const { email, name, password } = req.body as SignupData;
        if (!email || !name || !password) throw new Error("Invalid SignupData");

        const [err, data] = await db.createUser({ email, name, password });
        if (err) throw new Error(err?.message ?? "Error creating User");
        return res.status(201).json({ user: data });
    }

    throw new Error("Method not allowed!");
}
