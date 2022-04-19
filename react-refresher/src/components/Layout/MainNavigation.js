import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites.context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    const favCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            Favorites{" "}
                            <span
                                className={
                                    favCtx.totalFavorites > 0
                                        ? classes.badge
                                        : ""
                                }
                            >
                                {favCtx.totalFavorites !== 0
                                    ? favCtx.totalFavorites
                                    : null}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
