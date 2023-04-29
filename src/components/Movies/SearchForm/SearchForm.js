import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
    return (
        <form className="search-form">
            <input type="text" placeholder="Фильм"></input>
            <button type="submit">Найти</button>
            < FilterCheckbox />
        </form>
    );
}