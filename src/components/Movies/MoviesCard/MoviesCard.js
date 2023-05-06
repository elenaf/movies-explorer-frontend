import './MoviesCard.css';

import { movies } from '../../../constants/constants';
import { useState } from 'react';

export default function MoviesCard() {

    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        setLike(!like);
    }
   
    return (
        <div className="movies-card">
            <div className="movies-card__summary">
                <div className="movies-card__info">
                    <h2 className="movies-card__name">{movies[0].name}</h2>
                    <p className="movies-card__duration">{movies[0].duration}</p>
                </div>
                <button className={ `movies-card__like ${like ? "movies-card__like_active" : "" }`} onClick={handleLikeClick}></button>
            </div>
            <img alt="кадр из кино" src={movies[0].image} className="movies-card__image"/>
        </div>
    );
}