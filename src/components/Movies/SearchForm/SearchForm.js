import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from 'react';

export default function SearchForm() {
    const [search, setSearch] = useState("");

    const handleSearchChange = (evt) => {
        evt.preventDefault();
        setSearch(evt.target.value);
    }

    return (
        <form className="movie-search">
            <input id="movie" className="movie-search__input" type="text" value={search} onChange={handleSearchChange} placeholder="Фильм" required/>
            <button className="movie-search__submit-button" type="submit">Найти</button>
            < FilterCheckbox />
        </form>
    );
}