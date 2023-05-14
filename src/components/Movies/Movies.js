import './Movies.css';
import React, { useCallback, useEffect, useMemo, useState } from "react";

import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";
import moviesApi from '../../utils/MoviesApi';

export default function Movies() {
    // стейт, который меняется каждый раз, когда пользователь вводит символ в строку поиска
    const [search, setSearch] = useState('');

    const [error, setError] = useState(false);
    const errorMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

    // стейт, по которому будет осуществляться фильтрация фильмов из общего массива
    const [filterString, setFilterString] = useState(null);

    // тут храним все отданые api фильмы
    const [movies, setMovies] = useState([]);

    // условие поиска - короткометражки
    const [isShort, setIsShort] = useState(false);

    // страницы для вывода результатов поиска
    const [page, setPage] = useState(1);

    // ширина экрана для расчета кол-ва карточек на страницу
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    // записываем полученные из api все фильмы в стейт movies
    const fetchMovies = useCallback(async () => {
        try {
            const response = await moviesApi.getMovies();
            setMovies(response);
        } catch {
            setError(true);
        }
        
    }, []);

    // при монтировании компонента получаем список фильмов из api
    useEffect(() => {
        fetchMovies();

        const savedSearch = localStorage.getItem('search');
        const savedIsShort = localStorage.getItem('isShort');
        const savedFilteredMovies = localStorage.getItem(JSON.parse('movies'));

        if (savedSearch) {
            setSearch(savedSearch);
            setFilterString(savedSearch);
        };
        
        if (savedIsShort) {
            setIsShort(savedIsShort === 'true');
        };
        
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    /* const handleSearchSubmit = useCallback (async () => {
        setFilterString(search);
    }, [search]); */

    // Хранит фильмы, отфильтрованные по строке поиска.
    // Если содержимое строки поиска или начальный массив фильмов меняются,
    // происходит обновление списка отфильтрованных фильмов.
    const filteredMovies = useMemo(() => {
        console.log('I will show you filtered movies!');
        if (!filterString) {
            return [];
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

        localStorage.setItem('search', filterString);
        localStorage.setItem('isShort', `${isShort}`);

        return filtered;
    }, [filterString, movies, isShort]);

    // Фильмы, которые мы должны загрузить на экран
    // исходя из его ширины
    const moviesToRender = useMemo(() => {
        const amountToRender = screenWidth > 768 ? 7 : 5;

        return filteredMovies.slice(0, amountToRender * page);
    }, [filteredMovies, page, screenWidth]);

    const handleMoreClick = useCallback(() => {
        setPage((prev) => prev + 1)
    }, []);

    return (
        <>
            < SearchForm setIsShort={setIsShort} setSearch={setFilterString} search={search} />
            {error ? <div className='movies__error'>{errorMessage}</div> : < MoviesCardList movies={moviesToRender} /> }

            {(filteredMovies.length > moviesToRender.length) && (
                < More handleClick={handleMoreClick} />
            ) }
        </>
    );
}