//const BASE_URL = 'http://localhost:3627';

  class MainApi {
    constructor(arr) {
 /*       /!*  const BASE_URL = 'https:/
        /diplomfront.nomoredomains.work*!/*/
        this._address = arr.address;
        this._headers = arr.headers;
    }

      handleToken(){
          this._authTocken = localStorage.getItem("token");
          this._headers.Authorization = `Bearer ${this._authTocken}`;
      }

    _handleResponse = (response) => {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject(response.status);
            /*"Ошибка, УПС! " + response.status + ":" + response.statusText);*/
        }
    }


    checkToken = () => {
        this.handleToken();
        console.log(this._headers);
        return fetch(`${ this._address}/users/me`, {
                method: 'GET',
                headers: this._headers,
            },
        )
            .then((response) => this._handleResponse(response));
    }


    updateProfile = (name, email, password, token) => {
        this.handleToken();
        return fetch(`${ this._address}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            })
        })
            .then((response) => this._handleResponse(response));
    }


    /* register = (name, password, email) =>
     return fetch(`${this._address}/api/signup`,{*/

    register = (name, email, password) => {
        return fetch(`${ this._address}/signup`,
            {
                headers:  this._headers,
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                })
            })
            .then((response) =>this._handleResponse(response));
    }

 /*   export
    const*/
    login = (email, password) => {
        return fetch(`${ this._address}/signin`, {
            method: 'POST',
            headers:  this._headers,
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then((response) =>this._handleResponse(response))
    }

}

   const apiAuth = new MainApi({
    /*   /!* address: BASE_URL,*!/*/
        address: "http://localhost:3627/api",
        headers: {'Content-Type': 'application/json'}
    });

export default apiAuth;
