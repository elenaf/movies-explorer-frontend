import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
/* import { movies } from '../../../constants/constants'; */
import React from 'react';

export default function MoviesCardList({ movies }) {
    return (
        <div className="movies-cards">
            {movies.map((movie) => (
                < MoviesCard 
                    key={movie.id} 
                    nameRU={movie.nameRU}
                    nameEN={movie.nameEN}
                    director={movie.director}
                    country={movie.country}
                    year={movie.year} 
                    duration={movie.duration}
                    description={movie.description}
                    trailerLink={movie.trailerLink}
                    image={movie.image} 
                />
            ))}         
        </div>
    );
}