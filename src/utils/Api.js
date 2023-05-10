class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _handleFetchResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }
}

export default Api;