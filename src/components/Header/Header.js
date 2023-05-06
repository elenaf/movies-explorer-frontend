import './Header.css';

import React, { useState } from "react";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import AuthorizationPanel from "../AuthorizationPanel/AuthorizationPanel";
import NavigationPopup from "../NavigationPopup/NavigationPopup";
import Logo from "../Logo/Logo";
import BurgerButton from '../BurgerButton/BurgerButton';

export default function Header(props) {
    const { isLoggedIn } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsOpen(true);
    }

    const handleExitClick = () => {
        setIsOpen(false);
    }
console.log(isOpen);

    return(
        <header className="header">
            < Logo />
            {/* < NavigationPopup isVisible={isBurgerNavVisible}/> */}
            {isLoggedIn ? 
            <>
                < NavigationPanel />
                {isOpen ? 
                    < NavigationPopup 
                        handleExitClick={handleExitClick} 
                    /> :
                    < BurgerButton 
                        handleBurgerClick={handleBurgerClick}
                        
                    />
                }
                
            </>   
            :
                < AuthorizationPanel />
            }
        </header>
    );
}