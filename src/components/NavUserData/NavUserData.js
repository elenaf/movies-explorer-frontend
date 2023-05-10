import './NavUserData.css';

import React from "react";
import { NavLink } from "react-router-dom";

export default function NavUserData() {
    return (
        <section className="nav-user-data">
            <NavLink to="/profile" className="nav-user-data__profile-link">Аккаунт</NavLink>
            <div className="nav-user-data__profile-icon"></div>
        </section>
    );
}