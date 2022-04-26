import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
    if (req.method === "POST") {
        const { email } = req.body;
        if (!email || !email.includes("@")) {
            res.status(422).json({ message: "Invalid email address." });
            return;
        }

        let client;
        try {
            client = await connectDatabase();
        } catch (err) {
            res.status(500).json({
                message: "Connecting to the database failed",
            });
            return;
        }
        let result;
        try {
            result = await insertDocument(client, "emails", { email });
            client.close();
        } catch (err) {
            res.status(500).json({
                message: "Inserting to the database failed",
            });
            return;
        }

        console.log(email);
        res.status(201).json({
            message: "Email added successfully",
            email: result,
        });
    }
}

export default handler;
//keYRing123
