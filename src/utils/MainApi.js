//const BASE_URL = 'http://localhost:3627';

    class MainApi {
        constructor(arr) {
            /*  const BASE_URL = 'https://diplomfront.nomoredomains.work*/
            this._address = arr.address;
            this._headers = arr.headers;
        }
        handleToken(){
            this._authTocken = localStorage.getItem('token');
            this._headers.Authorization = `Bearer ${this._authTocken}`;
        }

        _handleResponse(response) {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response.status);
                    /*"Ошибка, УПС! " + response.status + ":" + response.statusText);*/
            }
        }

        /*  #################### users   #####################*/
        checkToken = (token) => {
            return fetch(`${this._address}/users/me`, {
                method: 'GET',
            headers:{ ...this._headers,
                    'Authorization': `Bearer ${token}`},
                }
            )
                .then((response) => this._handleResponse(response));
        }

        updateProfile = (name, email, password, token) => {
            return fetch(`${this._address}/users/me`, {
                method: 'PATCH',
                headers: {
                    ...this._headers,
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password:password,
                })
            })
                .then((response) => this._handleResponse(response));
        }


       /* register = (name, password, email) =>
        return fetch(`${this._address}/api/signup`,{*/
        register(userData,token){
             return fetch(`${this._address}/api/signup`,
                 {  headers:{...this._headers,  'Authorization': `Bearer ${token}`},
                    body:JSON.stringify(userData),
                     method: 'POST',
                  },)
                .then(this._handleResponse)
        }

        login = (userData,token) => {
            return fetch(`${this._address}/signin`, {
                method: 'POST',
              headers:{...this._headers,  'Authorization': `Bearer ${token}`},
                body: JSON.stringify(userData)})
               .then(this._handleResponse)}

    }
    const apiAuth = new MainApi({
       /* address: BASE_URL,*/
        address: "http://localhost:3627",
        headers: {'Content-Type': 'application/json'}
    });

export default apiAuth;
