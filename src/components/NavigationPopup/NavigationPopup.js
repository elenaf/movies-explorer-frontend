import React from "react";
import Navigation from "../Navigation/Navigation";

export default function NavigationPopup() {
    return(
        <section className="navigation-popup">
            <div className="navigation-popup__button-close"></div>
            <div className="navigation-popup__panel">
                < Navigation />
                <div className="navigation-panel__user-data">
                        <p className="navigation-panel__profile-link">Аккаунт</p>
                        <div className="navigation-panel__profile-icon"></div>
                </div>
            </div>
        </section>
    );
}