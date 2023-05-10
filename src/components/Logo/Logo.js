import './Logo.css'

import { NavLink } from "react-router-dom";

export default function Logo() {
    return(
        <NavLink to="/">
            <div className="logo"></div>
        </NavLink>
    );
}