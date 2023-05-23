import Api from "./Api";

class MainApi extends Api {
    constructor(config) {
        super(config);
        this._url = config.url;
        this._headers = config.headers;
    }

    /* async getUserInfo() {
        const response = await fetch(`${this._url}/users/me`, {
            headers: this._headers,
        });
        const data = await this._handleFetchResponse(response);
        return data;
    } */

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: { 
                ...this._headers,
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((res) => this._handleFetchResponse(res));
    }

    editProfile({ email, name }) {
        return fetch(`${this._url}/users/me `, {
          method: 'PATCH',
          headers: {
            ...this._headers,
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ email, name })
        })
        .then((res) => this._handleFetchResponse(res));
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            headers: {
                ...this._headers,
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
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
        nameRU, 
        nameEN 
    }) {
        return fetch(`${this._url}/movies `, {
          method: 'POST',
          headers: {
            ...this._headers,
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
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
            nameRU, 
            nameEN 
           })
        })
        .then((res) => this._handleFetchResponse(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                authorization: `Bearer ${localStorage.getItem('token')}`,
              },
          })
            .then((res) => this._handleFetchResponse(res));
    }

}

const mainApi = new MainApi({
    url: 'https://api.movie.nomoredomains.monster',
    headers: {
        "content-type": "application/json"
    }
});

export default mainApi;