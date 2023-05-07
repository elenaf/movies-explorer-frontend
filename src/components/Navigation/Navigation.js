import './Navigation.css';
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation({ isPopup }) {

    return(
        <nav className="navigation">
            {isPopup && <NavLink to="/" className={({isActive}) => `navigation-link ${isActive ? "navigation-link_active" : ""}`}>Главная</NavLink>}

            <NavLink to="/movies" className={({isActive}) => `navigation-link ${isActive ? "navigation-link_active" : ""}`}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({isActive}) => `navigation-link ${isActive ? "navigation-link_active" : ""}`}>Сохранённые фильмы</NavLink>
        </nav>
    );
}
