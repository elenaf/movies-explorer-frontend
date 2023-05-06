import './NavigationPanel.css';

/* import { NavLink } from "react-router-dom"; */
import Navigation from "../Navigation/Navigation";
import NavUserData from '../NavUserData/NavUserData';

export default function NavigationPanel() {
    return(
        <section className="navigation-panel">
            < Navigation isPopup="false"/>
            < NavUserData />
            {/* <div className="navigation-panel__user-data">
                    <NavLink to="/profile" className="navigation-panel__profile-link">Аккаунт</NavLink>
                    <div className="navigation-panel__profile-icon"></div>
            </div> */}
        </section>
    );
}