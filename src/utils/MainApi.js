import { BASE_URL} from "./constants";

class MainApi {
      constructor(arr) {
          this._address = arr.address;
          this._headers = arr.headers;
      }

      handleToken() {
          this._authTocken = localStorage.getItem("token");
          this._headers.Authorization = `Bearer ${this._authTocken}`;
      }

      _handleResponse = (response) => {
          if (response.ok) {
              return response.json()
          } else {
              return Promise.reject(response.status +
              "Ошибка, УПС! " + response.status + ":" + response.statusText);
          }
      }


      checkToken = () => {
          this.handleToken();
          console.log(this._headers);
          return fetch(`${this._address}/users/me`, {
                  method: 'GET',
                  headers: this._headers,
              },
          )
              .then((response) => this._handleResponse(response));
      }

      submitProfile = (name, email/*, password*/) => {
          this.handleToken();
          return fetch(`${this._address}/users/me`, {
              method: 'PATCH',
              headers: this._headers,
              body: JSON.stringify({
                  'name': name,
                  'email': email,
                  /*password: password,*/
              })
          })
              .then((response) => this._handleResponse(response));
      }



      register = (name, email, password) => {
          return fetch(`${this._address}/signup`,
              {
                  headers: this._headers,
                  method: 'POST',
                  body: JSON.stringify({
                      name: name,
                      email: email,
                      password: password,
                  })
              })
              .then((response) => this._handleResponse(response));
      }


      login = (email, password) => {
          return fetch(`${this._address}/signin`, {
              method: 'POST',
              headers: this._headers,
              body: JSON.stringify({
                  email: email,
                  password: password,
              })
          })
              .then((response) => this._handleResponse(response))
      }

      deleteMovie = (movieId) => {
          this.handleToken();
          return fetch(`${this._address}/movies/${movieId}`,
              {
              headers: this._headers,
              method: 'DELETE'
              })
              .then((response) => this._handleResponse(response))
      }


      /*GET MOVIES*/
      getSaveMovies = () => {
          this.handleToken();
          return fetch(`${this._address}/movies`, {
              method: 'GET',
              headers: { ...this._headers,}
          })
              .then((response) => this._handleResponse(response));
      }

      saveMovie = ( country,
                    director,
                    duration,
                    year,
                    description,
                    movieId,
                    nameRU,
                    nameEN,
                    trailer,
                    thumbnail
      ) => {
          return fetch(`${this._address}/movies`, {
              method: 'POST',
              headers:{...this._headers,},
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
                  thumbnail: thumbnail
              })
          })
              .then((response) => this._handleResponse(response));
      }
  }
   const apiAuth = new MainApi({
        address: BASE_URL,
     /*   address: "http://localhost:3627/api",*/
        headers: {'Content-Type': 'application/json'}
    });

export default apiAuth;
