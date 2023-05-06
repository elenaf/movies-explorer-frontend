import './Navigation.css';
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation(props) {
    const { isPopup } = props;

    return(
        <nav className="navigation">
            {isPopup ?
                <NavLink to="/" className="navigation-link">Главная</NavLink> :
                <></>
            }
            {/* <NavLink to="/" className="navigation-link">Главная</NavLink> */}
            <NavLink to="/movies" className="navigation-link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation-link">Сохранённые фильмы</NavLink>
        </nav>
    );
}