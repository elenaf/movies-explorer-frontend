import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from '../../../utils/useForm';
import { useEffect } from 'react';

export default function SearchForm({ isShort, setIsShort, setFilterString, search, setSearch }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation({ movie: search });

    useEffect(() => {
        setSearch(values.movie);
    }, [values.movie, setSearch])

    const handleSearchSubmit = (evt) => {
        evt.preventDefault();
        setFilterString(search);
    }

    return (
        <form className="movie-search" onSubmit={handleSearchSubmit} noValidate>
                <input 
                    id="movie" 
                    name="movie" 
                    className="movie-search__input" 
                    type="text" 
                    value={values["movie"]} 
                    onChange={handleChange}
                    placeholder="Фильм" 
                    required
                />
            <button className="movie-search__submit-button" type="submit" disabled={!isValid && values["movie"]===""}>Найти</button>
            < FilterCheckbox isShort={isShort} setIsShort={setIsShort} />
            {errors["movie"] && <span className='movie-search__error'>Нужно ввести ключевое слово</span>}
        </form>
    );
}