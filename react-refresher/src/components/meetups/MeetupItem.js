import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavoritesContext from "../../store/favorites.context";

const MeetupItem = (props) => {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatus = () => {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    };

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatus}>
                        {itemIsFavorite
                            ? "Remove From Favorites"
                            : "To Favorites"}
                    </button>
                </div>
            </li>
        </Card>
    );
};

export default MeetupItem;
