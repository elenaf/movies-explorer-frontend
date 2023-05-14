import './FilterCheckbox.css';
import React, { useEffect, useState } from 'react';

export default function FilterCheckbox({ setIsShort }) {
    const [isChecked, setIsChecked] = useState(false);

    const changeCheck = () => {
        setIsChecked(!isChecked);
    }

    useEffect(() => setIsShort(isChecked));
    

    return (
        <section className="short-films">
            <input id="short-films" className="short-films__filter short-films__filter_invisible" type="checkbox" value="short-films" onChange={changeCheck}/>
            <div className={`short-films__filter short-films__filter_visible ${isChecked ? "" : "short-films__filter_visible_inactive"}` }>
                <div className={`short-films__filter-checker ${isChecked ? "" : "short-films__filter-checker_inactive"}` }></div>
            </div>
            
            <label htmlFor="short-films" className="short-films__filter-label">Короткометражки</label>
        </section>
    );
}
