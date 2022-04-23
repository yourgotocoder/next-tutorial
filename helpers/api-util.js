export async function getAllEvents() {
    const response = await fetch(
        "https://next-js-cou-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
    );
    const data = await response.json();
    const events = [];

    for (let key in data) {
        events.push({
            id: key,
            ...data[key],
        });
    }
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    const featuredEvents = allEvents.filter(
        (event) => event.isFeatured === true
    );
    return featuredEvents;
}
