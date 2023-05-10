import './BurgerButton.css';

import React from 'react';

export default function BurgerButton(props) {
    const { handleBurgerClick } = props;

    return (
        <button className="burger-button" onClick={handleBurgerClick}></button>
    );
}