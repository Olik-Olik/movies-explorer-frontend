class ApiMovies {
    constructor(arr) {
        this._address = arr.address;
      /*  this._headers = arr.headers;*/
    }

    _handleResponse(response) {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject("Ошибка, УПС! " + response.status + ":" + response.statusText);
        }
    }
//получение карточек с сервера внешний метод
    getAllAboutMovies() {
    //    this.handleToken();
        return fetch(this._address /*+ '/movies'*/,
            {
                method: 'GET',
            })
            .then((response) => this._handleResponse(response));
    }
}

   /* like(cardId) {
        this.handleToken();
        return fetch(this._address + '/movies/likes/' + cardId, {
            headers: { 'Authorization': this._headers.Authorization },
            //headers:{ this._headers, Authorization: `Bearer ${handleToken}`},
            method: 'PUT'
        })
            .then((response) => this._handleResponse(response));
    }

    dislike(cardId) {
        this.handleToken();
        return fetch(this._address + '/movies/likes/' + cardId, {
            headers: { 'Authorization': this._headers.Authorization },
            method: 'DELETE'
        })
            .then((response) => this._handleResponse(response))
    }

*/

const apiMovies = new ApiMovies({
    address: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {'Content-Type': 'application/json'}
});

export default apiMovies;
