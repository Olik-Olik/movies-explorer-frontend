class ApiMovies {
    constructor(arr) {
        this._address = arr.address;
    }

    _handleResponse(response) {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject(response.status);
             /*   "Ошибка, УПС! " + response.status + ":" + response.statusText);*/
        }
    }
//получение карточек с сервера внешний метод
    getAllAboutMovies() {
    //    this.handleToken();
        return fetch(this._address,
            {
                method: 'GET',
                headers: { ... this._headers,}
            })
            .then((response) => this._handleResponse(response));
    }
/*

/!*GET MOVIES*!/
getSaveMovies = (token) => {
    return fetch(`${this._address}/movies`, {
        method: 'GET',
        headers: { ... this._headers,}
    })
        .then((response) => this._handleResponse(response));
}
*/
/*

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
              image
) => {
    return fetch(`${this._address}/saved-movies`, {
        method: 'POST',
        headers: { ... this._headers,},
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
*/

/*
/!*DEL MOVIE 1      id ########## !!!*!/
deleteMovie = (data, token, id) => {
    return fetch(`${this._address}/saved-movies/${id}`, {
        method: 'DELETE',
        headers: { ... this._headers,}
    })
        .then((response) => this._handleResponse(response));
}
*/

}

const apiMovies = new ApiMovies({
    address: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {'Content-Type': 'application/json'}
});


export default apiMovies;
