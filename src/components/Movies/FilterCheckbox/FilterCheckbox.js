import './FilterCheckbox.css';
import React, { useState } from 'react';

export default function FilterCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    const changeCheck = () => {
        setIsChecked(!isChecked);
    }

    return (
        <section className="filter">
            <input id="short-films" className="short-films__filter_invisible" type="checkbox" value="short-films" onChange={changeCheck}/>
            <div className={`short-films__filter_visible ${isChecked ? "" : "short-films__filter_visible_inactive"}` }>
                <div className={`short-films__filter-checker ${isChecked ? "" : "short-films__filter-checker_inactive"}` }></div>
            </div>
            
            <label htmlFor="short-films" className="short-films__filter-label">Короткометражки</label>
        </section>
    );
}
/* className={ `${isChecked ? "short-films__filter_visible" : "short-films__filter_visible_inactive"}` } */