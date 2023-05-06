import './NavigationPopup.css';

/* import { NavLink } from 'react-router-dom'; */
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import NavUserData from '../NavUserData/NavUserData';

export default function NavigationPopup(props) {
    /* console.log(`prop ${props.isVisible}`); */
    /* const [isVisible, setIsVisible] = useState(props.isVisible); */
/* console.log(`NavPopup ${isVisible}`); */
   /*  const handleClick = () => {
        setIsVisible(isVisible);
    } */
    const { handleExitClick } = props;
    

    return(
        <section className="navigation-popup"/* { `navigation-popup ${ isVisible ? "navigation-popup_open" : ""}` } */>
            {/* <button className="header__burger-menu" onClick={handleClick}></button> */}
            
            {/* <div className='navigation-popup__content'> */}
                <button className="navigation-popup__button-close" onClick={handleExitClick}></button>
                <div className="navigation-popup__panel">
                    < Navigation isPopup="true"/>
                    < NavUserData />
                    {/* <div className="navigation-panel__user-data">
                    <NavLink to="/profile" className="navigation-panel__profile-link">Аккаунт</NavLink>
                            <div className="navigation-panel__profile-icon"></div>
                    </div> */}
                </div>
            {/* </div> */}
        </section>
    );
}