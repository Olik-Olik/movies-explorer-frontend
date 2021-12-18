const BASE_URL = 'http://localhost:3000';
    class MainApi {
        constructor(arr) {

            /*  const BASE_URL = 'https://diplomfront.nomoredomains.work*/
            this._address = arr.address;
            this._headers = arr.headers;
        }
        _handleResponse(response) {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject("Ошибка, УПС! " + response.status + ":" + response.statusText);
            }
        }
  /*  #################### users   #####################*/
  checkToken = (token) => {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((response) => this._handleResponse(response));
    }

    updateProfile = (name, email, token) => {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then((response) => this._handleResponse(response));
    }


    register = (name, password, email) => {
        return fetch(`${this._address}/signup`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name:name,
                password: password,
                email: email
            }),
        })
            .then((response) => this._handleResponse(response))
    }

    login = (password, email) => {
        return fetch(`${this._address}/signin`, {
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
            .then((response) => this._handleResponse(response));
    }
/*  ####################  MOVIE #####################*/
/*GET MOVIES*/
    getSaveMovies = (token) => {
        return fetch(`${this._address}/movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((response) => this._handleResponse(response));
    }
/* POST MOVIE  -заменить дату - перечислить!!!*/
    saveMovie = ( country,
                  director,
                  duration,
                  year,
                  description,
                  movieId,
                  nameRU,
                  nameEN,
                  trailer,
                  thumbnail,
                  image,
              /*    token*/
    ) => {
        return fetch(`${this._address}/saved-movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
             /*   'Authorization': `Bearer ${token}`,*/
            },
            body: JSON.stringify({
                    country: country,
                    director: director,
                    duration: duration,
                    year: year,
                    description: description,
                    movieId: movieId,
                    nameRU: nameRU,
                    nameEN: nameEN,
                    trailer: trailer,
                    thumbnail: thumbnail,
                    image: image,
            })
        })
            .then((response) => this._handleResponse(response));
    }

  /*DEL MOVIE 1 !!!*/
    deleteMovie = (data, token) => {
        return fetch(`${this._address}/saved-movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((response) => this._handleResponse(response));
    }
}
    const apiAuth = new MainApi({
        address: 'https://api.nomoreparties.co/beatfilm-movies',
        headers: {'Content-Type': 'application/json'}
    });

export default apiAuth;

/*/signin login+
* updateProfile
* /signup register+
* /users/me+
* getUser
* get save del Movies
* */