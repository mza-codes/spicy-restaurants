import { NextApiRequest, NextApiResponse } from "next";

export type AddReviewRes = {
    id: boolean;
    p: string;
    status: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AddReviewRes>
) {
    if (req.method === "POST") {
        console.log(req.body);

        return res.status(201).json({ status: "PENDING", id: false, p: "80001456" });
    }

    throw new Error("Method not allowed!");
}
