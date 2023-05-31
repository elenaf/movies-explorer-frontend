import Api from "./Api";

class MoviesApi extends Api {
    constructor(config) {
        super(config);
        this._url = config.url;
        this._headers = config.headers;
    }

    getMovies() {
        return fetch(`${this._url}/`, {
            headers: this._headers,
        })
        .then((res) => this._handleFetchResponse(res));
    }

    addNewMovie({ 
        country, 
        director, 
        duration, 
        year, 
        description, 
        image, 
        trailerLink, 
        thumbnail, 
        owner, 
        movieId, 
        nameRu, 
        nameEn 
    }) {
        return fetch(`${this._url}/movies `, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({ 
            country, 
            director, 
            duration, 
            year, 
            description, 
            image, 
            trailerLink, 
            thumbnail, 
            owner, 
            movieId, 
            nameRu, 
            nameEn 
           })
        })
        .then((res) => this._handleFetchResponse(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers
          })
            .then((res) => this._handleFetchResponse(res));
    }
}

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "content-type": "application/json"
    }
});

export default moviesApi;