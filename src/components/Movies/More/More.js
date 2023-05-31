import './More.css';

import React from 'react';

export default function More({ handleClick }) {
    return (
        <section className="more">
            <button className="more__button" type='button' onClick={handleClick}>Ещё</button>
        </section>
    );
}