import '../Movies/Movies.css';

import React from "react";

import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import mainApi from '../../utils/MainApi';
import { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import Preloader from '../Movies/Preloader/Preloader';

export default function SavedMovies() {

    // стейт, который меняется каждый раз, когда пользователь вводит символ в строку поиска
    const [search, setSearch] = useState('');

    const [error, setError] = useState(false);
    const errorMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

    // стейт, по которому будет осуществляться фильтрация фильмов из общего массива
    const [filterString, setFilterString] = useState(null);

    // тут храним все отданые api фильмы
    const [movies, setMovies] = useState([]);

    // булевый стейт, идет ли загрузка фильмов на страницу
    const [isLoading, setIsLoading] = useState(false);

    // условие поиска - короткометражки
    const [isShort, setIsShort] = useState(false);



    // записываем полученные из api сохраненные фильмы в стейт movies
    const getMovies = useCallback(async() => {
        try {
            setIsLoading(true);
            const response = await mainApi.getMovies();
            setIsLoading(false);
            setMovies(response);
        } catch (err) {
            setIsLoading(false);
            setError(true);
        }
    }, []);

    useEffect(() => {
        getMovies();
    }, []);

    // Хранит фильмы, отфильтрованные по строке поиска.
    // Если содержимое строки поиска или начальный массив фильмов меняются,
    // происходит обновление списка отфильтрованных фильмов.
    const filteredMovies = useMemo(() => {
       
        if (!filterString) {
            return movies;
        }
        
        const filtered = movies.filter((movie) => {
            const nameRU = movie.nameRU.toLowerCase();
            const nameEN = movie.nameEN.toLowerCase();
            const filterStr = filterString.toLowerCase();

            // фильтр короткометражек
            if (isShort && movie.duration > 40) {
                return false;
            }

            return nameRU.includes(filterStr) || nameEN.includes(filterStr);
        })

        
        return filtered;
    }, [filterString, movies, isShort]);

    const handleDeleteClick = async(movie) => {
        console.log(movies);
        const dislikedMovie = await mainApi.deleteMovie(movie._id);
        const likedMovies = movies.filter((m) => {
            if (m._id !== dislikedMovie._id) {
                return m;
            }
            return false;
        });
        setMovies(likedMovies);
        console.log(movies);
    }

    return (
        <>
            < SearchForm 
                isShort={isShort}
                setIsShort={setIsShort}
                setFilterString={setFilterString}
                search={search}
                setSearch={setSearch}
            />

            {error ? 
            <div className='movies__error'>{errorMessage}</div> : 
            isLoading ?
            < Preloader /> :
            < MoviesCardList 
                movies={filteredMovies} 
                isSaved={true} 
                handleDeleteClick={handleDeleteClick}
                savedMovies={movies}
            /> }

            { (filteredMovies.length === 0) && <div className='movies__error'>Ничего не найдено</div> }
        </>
    );
}