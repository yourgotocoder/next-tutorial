import {
    connectDatabase,
    getAllDocuments,
    insertDocument,
} from "../../../helpers/db-util";

async function handler(req, res) {
    const { eventId } = req.query;

    let client;
    try {
        client = await connectDatabase();
    } catch (err) {
        res.status(500).json({ message: "Database connection failed" });
        return;
    }

    if (req.method === "POST") {
        const { email, name, text } = req.body;
        if (
            !email ||
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !text ||
            text.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid input" });
            client.close();
            return;
        }

        const newComment = {
            eventId,
            email,
            name,
            text,
        };

        let result;
        try {
            result = await insertDocument(client, "comments", newComment);
            newComment._id = result.insertedId;

            res.status(201).json({
                message: "Comment addded successfully",
                comment: newComment,
            });
        } catch (err) {
            res.status(500).json({ message: "Error inserting document" });
        }

        //Add server side validation
    } else if (req.method === "GET") {
        //Send data
        let result;
        try {
            result = await getAllDocuments(client, "comments", { _id: -1 });
            const filteredEvents = result.filter(
                (event) => event.eventId === eventId
            );
            res.status(200).json({
                message: "Comments data",
                comments: filteredEvents,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error getting response" });
        }
    }
    client.close();
}

export default handler;
