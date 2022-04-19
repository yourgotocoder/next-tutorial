import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
    const [loading, setLoading] = useState(true);
    const [meetupData, setMeetupData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(
            "https://react-getting-started-84b48-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };
                    meetups.push(meetup);
                }
                setLoading(false);
                setMeetupData(meetups);

                console.log(data);
            });
    }, []);
    return (
        <div>
            {loading ? <p>Loading...</p> : <MeetupList meetups={meetupData} />}
        </div>
    );
};

export default AllMeetups;
