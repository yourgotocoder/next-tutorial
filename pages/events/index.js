import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const EventsPage = () => {
    const events = getAllEvents();
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
