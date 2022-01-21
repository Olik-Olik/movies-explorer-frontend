import {BEATFILM} from "./constants";

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
                headers: {...this._headers,}
            })
            .then((response) => this._handleResponse(response));
    }
}

const apiMovies = new ApiMovies({
    address: /*'https://api.nomoreparties.co/beatfilm-movies'*/ BEATFILM,
    headers: {'Content-Type': 'application/json'}
});


export default apiMovies;
