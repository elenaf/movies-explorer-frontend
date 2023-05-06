import './NavTab.css'

import React from "react";
import { NavLink, Link } from "react-router-dom";


export default function NavTab() {
    return (
        <nav className="promo__nav">
            <a href="#project" className="promo__nav-link">О проекте</a>
            <a href="#tech" className="promo__nav-link">Технологии</a>
            <a href="#student" className="promo__nav-link">Студент</a>
        </nav>
    );
}