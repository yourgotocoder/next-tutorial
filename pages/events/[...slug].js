import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/api-util";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/error-alert";

const EventsFilterPage = (props) => {
  if (props.hasError) {
    return (
      <>
        <ErrorAlert>Invalid filter, please adjust your values</ErrorAlert>
        <div className="centre">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.filteredEvents;

  if (filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No events found for this date</ErrorAlert>
        <div className="centre">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents}></EventList>
    </>
  );
};

export default EventsFilterPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    },
  };
}
