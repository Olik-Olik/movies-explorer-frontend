/*


// export const BASE_URL = 'https://auth.nomoreparties.co';

/!*export const BASE_URL = process.env.NODE_ENV === 'production' ?
      'https://back.nomoredomains.work' :'http://localhost:3624';*!/

export const BASE_URL = 'http://localhost:3624';

export const MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((response) => handleResponse(response));
}
export const updateProfile = (password, email, token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
        .then((response) => handleResponse(response));
}

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            password: password,
            email: email
        }),
    })
        .then((response) => handleResponse(response))
}

function handleResponse(response) {
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject("Ошибка, УПС! " + response.status + ":" + response.statusText);
    }
}

export const login = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
        .then((response) => handleResponse(response));
}
export const getSaveMovies = (token) => {
    return fetch (`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((response) => handleResponse(response));
}
/!*перечислить что передвю вместо data*!/
export const saveMovies = (data, token) => {
 return fetch (`${BASE_URL}/saved-movies`, {
     method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(data),
     })
     .then((response) => handleResponse(response));
}

export const deleteMovies = ( data, token) => {
    return fetch (`${BASE_URL}/saved-movies/${id}`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((response) => handleResponse(response));
}

/!*!/signin login+
* updateProfile
* /signup register+
* /users/me+
* saveMovies
* getUser
* getMovies save del
* *!/*/
