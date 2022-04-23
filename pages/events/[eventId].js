import React from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/UI/error-alert";
import {
    getAllEvents,
    getEventById,
    getFeaturedEvents,
} from "../../helpers/api-util";

const EventDetailPage = (props) => {
    let event = props.event;

    if (!event) {
        return <div className="centre">Loading</div>;
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

export async function getStaticProps(context) {
    const { params } = context;
    const eventId = params.eventId;
    const event = await getEventById(eventId);
    return {
        props: {
            event: event,
        },
        revalidate: 600,
    };
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map((event) => ({ params: { eventId: event.id } }));
    return {
        paths: paths,
        fallback: "blocking",
    };
}
