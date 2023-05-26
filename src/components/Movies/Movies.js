import './Movies.css';
import React, { useCallback, useEffect, useMemo, useState } from "react";

import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

export default function Movies() {

    // стейт, который меняется каждый раз, когда пользователь вводит символ в строку поиска
    const [search, setSearch] = useState(localStorage.getItem('search') ?? '');

    const [error, setError] = useState(false);
    const errorMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

    // стейт, по которому будет осуществляться фильтрация фильмов из общего массива
    const [filterString, setFilterString] = useState(null);

    // тут храним все отданые api фильмы
    const [movies, setMovies] = useState([]);

    // тут храним все отданные api сохраненные фильмы
    const [savedMovies, setSavedMovies] = useState([]);

    // условие поиска - короткометражки
    const [isShort, setIsShort] = useState(localStorage.getItem('isShort') ?? false);

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

    // записываем полученные из api все сохраненные фильмы в стейт savedMovies
    const fetchSavedMovies = useCallback(async () => {
        try {
            const res = await mainApi.getMovies();
            setSavedMovies(res);
        } catch (err) {
            console.log(err);
        }
    }, []);

    // при монтировании компонента Movies получаем список фильмов из api
    // и сохраненные фильмы для лайканья
    useEffect(() => {
        fetchMovies();
        fetchSavedMovies();
        const savedSearch = localStorage.getItem('search');
        const savedIsShort = localStorage.getItem('isShort');
        const savedFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));

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

    // Хранит фильмы, отфильтрованные по строке поиска.
    // Если содержимое строки поиска или начальный массив фильмов меняются,
    // происходит обновление списка отфильтрованных фильмов.
    const filteredMovies = useMemo(() => {
       
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

        localStorage.setItem("search", filterString);
        localStorage.setItem('isShort', `${isShort}`);
        localStorage.setItem('filteredMovies', JSON.stringify(filtered));
        
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

    // обработчик клика по лайку
    const handleLikeClick = async (movie) => {
        // сравниваем id сохраненного фильма и того, по которому лайкаем
        const likedMovie = savedMovies.find((m) => m.movieId === movie.movieId);
        console.log(likedMovie);

        if (likedMovie) {
            const dislikedMovie = await mainApi.deleteMovie(likedMovie._id);
            const likedMovies = savedMovies.filter((savedMovie) => {
                if (savedMovie._id !== dislikedMovie._id) {
                    return savedMovie;
                }
                return false;
            });
            setSavedMovies(likedMovies);
        } else {
            const movieToSave = await mainApi.addNewMovie(movie);
            console.log(movieToSave);
            setSavedMovies([...savedMovies, movieToSave]);
        }
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
            < MoviesCardList 
                movies={moviesToRender} 
                isSaved={false}
                handleLikeClick={handleLikeClick}
                savedMovies={savedMovies}
            /> }

            {(filteredMovies.length > moviesToRender.length) && (
                < More handleClick={handleMoreClick} />
            ) }

            { filterString && (moviesToRender.length === 0) && <div className='movies__error'>Ничего не найдено</div> }
        </>
    );
}