import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites.context";

const Favorites = () => {
    const favCtx = useContext(FavoritesContext);

    return (
        <section>
            <h1>My favorites</h1>
            {favCtx.totalFavorites === 0 ? (
                <p>You have no favorites</p>
            ) : (
                <MeetupList meetups={favCtx.favorites}></MeetupList>
            )}
        </section>
    );
};

export default Favorites;
