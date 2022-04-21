import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/error-alert";

const EventsFilterPage = () => {
    const router = useRouter();
    const filteredData = router.query.slug;
    if (!filteredData) {
        return <p className="center">Loading...</p>;
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>No events found</ErrorAlert>
                <div className="centre">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        );
    }

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    Invalid filter, please adjust your values
                </ErrorAlert>
                <div className="centre">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <>
            <ResultsTitle date={date}></ResultsTitle>
            <EventList items={filteredEvents}></EventList>
        </>
    );
};

export default EventsFilterPage;
