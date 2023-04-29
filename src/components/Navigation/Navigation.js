import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return(
        <nav className="navigation">
            {/* <NavLink to="/" className="navigation-link">Главная</NavLink> */}
            <NavLink to="/movies" className="navigation-link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation-link">Сохранённые фильмы</NavLink>
        </nav>
    );
}