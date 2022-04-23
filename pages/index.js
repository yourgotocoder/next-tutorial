import React from "react";
import EventList from "../components/events/EventList";
import { getAllEvents, getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
    if (!props.featuredEvents) {
        return <p>Loading</p>;
    }
    if (props.featuredEvents) {
        return (
            <div>
                <EventList items={props.featuredEvents} />
            </div>
        );
    }
};

export default HomePage;

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            featuredEvents,
        },
        revalidate: 600,
    };
}
