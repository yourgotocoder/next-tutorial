import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";


const HomePage = (props) => {
    if (!props.featuredEvents) {
        return <p>Loading</p>;
    }
    if (props.featuredEvents) {
        return (
            <div>
                <Head>
                    <title>NextJs Events</title>
                    <meta name="description" content="Find a lot of great events that allow you to evolve!!"></meta>
                </Head>
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
