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

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const events = await getAllEvents();

    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
        );
    });

    return filteredEvents;
}