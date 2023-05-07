import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from '../../../constants/constants';
import React from 'react';

export default function MoviesCardList() {
    return (
        <div className="movies-cards">
            {movies.map((movie) => (
                < MoviesCard 
                    key={movie.id} 
                    name={movie.name} 
                    duration={movie.duration}
                    image={movie.image} 
                />
            ))}         
        </div>
    );
}