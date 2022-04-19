import React, { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../UI/Card";

const NewMeetupForm = (props) => {
    const title = useRef();
    const image = useRef();
    const address = useRef();
    const description = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredTitle = title.current.value;
        const enteredImage = image.current.value;
        const enteredAddress = address.current.value;
        const enteredDescription = description.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        props.onAddMeetup(meetupData);
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={title} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={image} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={address} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="Description">Meetup Description</label>
                    <textarea
                        type="text"
                        required
                        id="Description"
                        rows="5"
                        ref={description}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
