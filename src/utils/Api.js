class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _handleFetchResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return res.json()
        .then((err) => {
            err.statusCode = res.status;
            return Promise.reject(err);
        })
        
    }
}

export default Api;