import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import React from 'react';

export default function MoviesCardList({ movies, isSaved, handleLikeClick, handleDeleteClick, savedMovies }) {

    return (
        <div className="movies-cards">
            {movies.map((movie) => (
                    (!isSaved) ?
                    < MoviesCard
                        key={movie.id} 
                        movieId={movie.id}
                        nameRU={movie.nameRU}
                        nameEN={movie.nameEN}
                        director={movie.director}
                        country={movie.country}
                        year={movie.year} 
                        duration={movie.duration}
                        description={movie.description}
                        trailerLink={movie.trailerLink}
                        image={`https://api.nomoreparties.co/${movie.image.url}`} 
                        thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
                        movie={movie}
                        
                        handleLikeClick={handleLikeClick}
                        savedMovies={savedMovies}
                    /> :
                    < MoviesCard
                        key={movie.movieId}
                        movieId={movie.movieId}
                        _id={movie._id}
                        country={movie.country}
                        director={movie.director}
                        duration={movie.duration}
                        year={movie.year}
                        description={movie.description}
                        image={movie.image}
                        trailerLink={movie.trailerLink}
                        thumbnail={movie.thumbnail}
                        owner={movie.owner}
                        nameRU={movie.nameRU}
                        nameEN={movie.nameEN}
                        handleDeleteClick={handleDeleteClick}
                        savedMovies={savedMovies}
                    />    
            ))}         
        </div>
    );
}