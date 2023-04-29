import React from "react";
import { NavLink } from "react-router-dom";


export default function NavTab() {
    return (
        <nav className="promo__nav">
            <NavLink to="#project" className="promo__nav-link">О проекте</NavLink>
            <NavLink to="#tech" className="promo__nav-link">Технологии</NavLink>
            <NavLink to="#student" className="promo__nav-link">Студент</NavLink>
        </nav>
    );
}