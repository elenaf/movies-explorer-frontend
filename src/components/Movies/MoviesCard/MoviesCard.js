import './MoviesCard.css';
import movieImg from "../../../images/movie-booksellers-image.jpg"

export default function MoviesCard() {
    return (
        <div className="movies-card">
            <div className="movies-card__summary">
                <div className="movies-card__info">
                    <h2 className="movies-card__name">33 слова о дизайне</h2>
                    <p className="movies-card__duration">1ч 42м</p>
                </div>
                <div className="movies-card__like"></div>
            </div>
            <img alt="кадр из кино" src={movieImg} className="movies-card__image"/>
        </div>
    );
}