import React from "react";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import AuthorizationPanel from "../AuthorizationPanel/AuthorizationPanel";
import NavigationPopup from "../NavigationPopup/NavigationPopup";
import Logo from "../Logo/Logo";

export default function Header() {
    return(
        <header className="header">
            < Logo />
            {/* <div className="header__logo"></div> */}
            {/* < NavigationPopup /> */}
            {/* < AuthorizationPanel /> */}
            < NavigationPanel />
            <div className="header__burger-menu"></div>
        </header>
    );
}