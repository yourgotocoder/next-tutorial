import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const history = useHistory();

    const addMeetupHandler = async (meetupData) => {
        try {
            const result = await fetch(
                "https://react-getting-started-84b48-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
                {
                    method: "POST",
                    body: JSON.stringify(meetupData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (result) {
                history.replace("/");
            }
        } catch (err) {}
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetup;
