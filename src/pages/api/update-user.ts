import { db } from "@/lib/db";
import { DBUser } from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "PATCH") {
        console.log(req.body);
        const payload = req.body as DBUser;

        const [err, data] = await db.updateUser(payload?._id, payload);
        if (err) throw new Error(err?.message ?? "Error creating User");
        return res.status(201).json({ user: data });
    }

    throw new Error("Method not allowed!");
}
