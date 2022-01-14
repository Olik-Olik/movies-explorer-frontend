
/*

class Api {
    constructor(arr) {
        this._address = arr.address;
        this._headers = arr.headers;
    }

    handleToken(){
        this._authTocken = localStorage.getItem('token');
        this._headers.Authorization = `Bearer ${this._authTocken}`;
    }
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

 const api = new Api({

        address: "http://localhost:3627",
        headers: {'Content-Type': 'application/json'}
    })

export default api;
*/
