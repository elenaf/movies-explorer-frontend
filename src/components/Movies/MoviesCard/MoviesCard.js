import './MoviesCard.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ _id, movieId, nameRU, nameEN, director, country, year, duration, description, image, trailerLink, thumbnail, handleLikeClick, handleDeleteClick, savedMovies }) {

    let location = useLocation();
    const pathMovies = "/movies";

    const durationTime = {
        hours: `${Math.floor(duration / 60)}ч `,
        minutes: `${duration % 60}м`
    }

    let movie;

    if (location.pathname === pathMovies) {
        movie = {
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            thumbnail,
            nameRU,
            nameEN,
            movieId 
        }
    } else {
        movie = {
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            thumbnail,
            nameRU,
            nameEN,
            movieId,
            _id,
        }
    }
    
    const isLiked = savedMovies.find((m) => m.movieId === movie.movieId);

    const onLike = async() => {
        await handleLikeClick(movie);
    };

    const onDelete = async() => {
        handleDeleteClick(movie);
    }


    return (
        <div className="movies-card">
            <div className="movies-card__summary">
                <div className="movies-card__info">
                    <h2 className="movies-card__name">{nameRU}</h2>
                    <p className="movies-card__duration">{durationTime.hours}{durationTime.minutes}</p>
                </div>
                { (location.pathname === pathMovies) ? 
                (<button className={ `movies-card__button movies-card__button-like ${isLiked ? "movies-card__button-like_active" : "" }`} onClick={onLike}></button>) :
                (<button className="movies-card__button movies-card__button-delete" onClick={onDelete}></button>)
                }
            </div>
            <a href={trailerLink} target='_blank' rel='noreferrer' className="movies-card__wrap-link">
                <img alt="кадр из кино" src={image} className="movies-card__image"/>
            </a>
        </div>
    );
}