import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../helpers/api-util";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const EventsPage = (props) => {
    const events = props.events;
    const router = useRouter();
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };
    return (
        <>
            <EventsSearch onSearch={findEventsHandler}></EventsSearch>
            <EventList items={events} />
        </>
    );
};

export default EventsPage;

export async function getStaticProps() {
    const allEvents = await getAllEvents();
    return {
        props: {
            events: allEvents,
        },
        revalidate: 60,
    };
}
