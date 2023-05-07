import './NavigationPanel.css';

import Navigation from "../Navigation/Navigation";
import NavUserData from '../NavUserData/NavUserData';

export default function NavigationPanel() {
    return(
        <section className="navigation-panel">
            < Navigation isPopup={false}/>
            < NavUserData />
        </section>
    );
}