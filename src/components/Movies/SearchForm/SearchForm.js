import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
    return (
        <form className="movie-search">
            <input id="movie" className="movie-search__input" type="text" placeholder="Фильм"/>
            <button className="movie-search__submit-button" type="submit">Найти</button>
            < FilterCheckbox />
        </form>
    );
}