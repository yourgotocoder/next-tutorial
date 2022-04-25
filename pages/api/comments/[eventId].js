function handler(req, res) {
    const { eventId } = req.query;

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
            return;
        }
        console.log(email, name, text);
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text,
        };
        res.status(201).json({
            message: "Comment addded successfully",
            comment: newComment,
        });
        //Add server side validation
    } else if (req.method === "GET") {
        //Send data
        const dummy_list = [
            { id: "c1", name: "Sudu", text: "A comment" },
            { id: "c2", name: "Sudu Rai", text: "B comment" },
            { id: "c3", name: "Su", text: "C comment" },
        ];
        res.status(200).json({
            message: "Comments data",
            comments: dummy_list,
        });
    }
}

export default handler;
