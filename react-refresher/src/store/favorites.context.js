import { createContext, useState } from "react";

const initialContext = {
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
};

const FavoritesContext = createContext(initialContext);

export const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevState) => prevState.concat(favoriteMeetup));
    };

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((prevState) =>
            prevState.filter((meetup) => meetup.id !== meetupId)
        );
    };

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContext;
