export const BASE_URL = 'https://api.movie.nomoredomains.monster/'

const defaultHeaders = {
    "Content-Type": "application/json",
}

const handleFetchResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return res.json()          
    .then((err) => {
        err.statusCode = res.status;
        return Promise.reject(err);
    })
}

export const request = ({
    url,
    method = 'POST',
    token,
    data,
}) => {
    let requestHeaders = defaultHeaders;
    
    if (!!token) {
        requestHeaders = {
            ...requestHeaders,
            "Authorization": `Bearer ${token}`
        }
    }

    const requestOptions = {
        method,
        headers: requestHeaders,
    }

    if (!!data) {
        requestOptions.body = JSON.stringify(data);
    }

    return fetch(`${BASE_URL}${url}`,
        requestOptions
    )
    .then((res) => handleFetchResponse(res));
    
}

export const register = (email, password, name) => {
    return request({
        url: 'signup',
        data: { email, password, name },
    })
}

export const login = ( email, password) => {
    return request({
        url: 'signin',
        data: { email, password },
    })
}

export const getUserData = (token) => {
    return request({
        url: 'users/me',
        method: 'GET',
        token,
    })
}