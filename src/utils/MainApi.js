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
            headers: this._headers,
        })
        .then((res) => this._handleFetchResponse(res));
    }

    editProfile({ email, name }) {
        return fetch(`${this._url}/users/me `, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({ email, name })
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