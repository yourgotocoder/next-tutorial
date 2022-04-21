import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/UI/error-alert";

const EventDetailPage = () => {
    const router = useRouter();
    const { eventId } = router.query;
    const event = getEventById(eventId);

    if (!event) {
        return <ErrorAlert>No event found</ErrorAlert>;
    }

    return (
        <>
            <EventSummary title={event.title}></EventSummary>
            <EventLogistics
                date={event.date}
                image={event.image}
                address={event.location}
                alt={event.description}
            ></EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventDetailPage;
