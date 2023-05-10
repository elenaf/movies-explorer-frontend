import './NavigationPopup.css';

import React from "react";
import Navigation from "../Navigation/Navigation";
import NavUserData from '../NavUserData/NavUserData';

export default function NavigationPopup(props) {

    const { handleExitClick } = props;
    

    return(
        <section className="navigation-popup">

                <button className="navigation-popup__button-close" onClick={handleExitClick}></button>
                <div className="navigation-popup__panel">
                    < Navigation isPopup={true}/>
                    < NavUserData />
                </div>
        </section>
    );
}