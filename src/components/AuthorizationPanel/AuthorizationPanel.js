import './AuthorizationPanel.css';

import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthorizationPanel() {
    return(
        <section className="authorization-panel">
            <nav className="authorization-panel__links">
                    <NavLink to="/signup" className="authorization-panel__link">Регистрация</NavLink>
                    <NavLink to="/signin" className="authorization-panel__link authorization-panel__login-link">Войти</NavLink>
            </nav>
        </section>
    );
}