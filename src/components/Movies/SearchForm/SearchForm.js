import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useCallback, useEffect, useState } from 'react';
import { useFormWithValidation } from '../../../utils/useForm';

export default function SearchForm({ setIsShort, setFilterString, search }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ movies: '' });
    
    useEffect(() => {
        values["movie"] = search;
    })

    const handleSearchSubmit = (evt) => {
        evt.preventDefault();
        setFilterString = values["movie"];
        console.log('searching');
        // тут должен запускаться прелоадер?
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
            <button className="movie-search__submit-button" type="submit" disabled={!isValid}>Найти</button>
            < FilterCheckbox setIsShort={setIsShort} />
            {errors["movie"] && <span className='movie-search__error'>Нужно ввести ключевое слово</span>}
        </form>
    );
}