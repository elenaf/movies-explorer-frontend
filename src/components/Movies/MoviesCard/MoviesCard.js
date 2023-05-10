import './MoviesCard.css';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ id, name, duration, image }) {

    let location = useLocation();
    const pathMovies = "/movies";

    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        setLike(!like);
    }
   
    return (
        <div className="movies-card" key={id}>
            <div className="movies-card__summary">
                <div className="movies-card__info">
                    <h2 className="movies-card__name">{name}</h2>
                    <p className="movies-card__duration">{duration}</p>
                </div>
                { (location.pathname === pathMovies) ? 
                (<button className={ `movies-card__button movies-card__button-like ${like ? "movies-card__button-like_active" : "" }`} onClick={handleLikeClick}></button>) :
                (<button className="movies-card__button movies-card__button-delete"></button>)
                }
            </div>
            <img alt="кадр из кино" src={image} className="movies-card__image"/>
        </div>
    );
}