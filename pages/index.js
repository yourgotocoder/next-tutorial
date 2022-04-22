import React from "react";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
    console.log(props);
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
    const response = await fetch(
        "https://next-js-cou-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
    );
    const data = await response.json();
    const transformedData = [];

    for (let key in data) {
        transformedData.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
            location: data[key].location,
            date: data[key].date,
            image: data[key].image,
            isFeatured: data[key].image,
        });
    }

    return {
        props: {
            featuredEvents: transformedData,
        },
    };
}
