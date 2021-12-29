/* Логин*/

import React, {useEffect, useState} from 'react';

import '../Profile.css';
import '../Footer.css';
import '../../index.css';
import {Link, useHistory} from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [emailError, setEmailError] = useState('');


   function handleChangeEmail(evt) {
       const emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(evt.target.value);

       if (emailValidation) {
           setEmailError('Валидный Email :)')
       } else {
           setEmailError('Enter valid Email!')
       }

        setEmail(evt.target.value);

    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmitLogin(evt) {

        evt.preventDefault();
        if ( !email || !password )  {
            return; }
        props.handleLogin(email, password)
            .then(() => {
            history.push('/movies')  /*#########*/
        }
    );
}
/*function handleChangeEmail(evt) {
    const emailValid = /^([a-z0-9.-]+)@([a-z0-9\-]+)\.([a-z.]{2,})*$/i.test(evt.target.value);
    if (emailValid) {
        setEmailError('Valid Email ')
    } else {
        setEmailError('Enter valid Email!')
    }
}*/

    return (
        <>
            {/*<SignUpHeader/>*/}
            <div className="auth">
                <form
                    onSubmit={handleSubmitLogin}
                    className="profile__email-email">

                    <div className="profile__email-email ">
                        <label className="profile__email ">E-mail
                        <div className="profile__input-email">
                            <input type='text'
                                   className="auth__form-login-input-email"
                                   name="email"
                                /*    defaultValue="byka@newtree.ru"*/
                                   required
                                   maxLength="30" minLength="2"
                                   value={email}
                                /*  value={email || ""}*/
                                /*  placeholder="Email"*/
                                   onChange={handleChangeEmail}/></div>
                        </label>
                    </div>

                    <div className="profile__email-email  profile__email-password">

                        <label className="profile__email ">Пароль  </label>

                        <div className="profile__input-password">
                            <input
                                className="auth__form-login-input-password profile__input-password"
                                /*    defaultValue="qwerty"*/
                                required
                                minLength="8"
                                name="password"
                                type="password"
                                value={password}
                                /*    value={password || ""}*/
                              /*  placeholder="Пароль"*/
                                onChange={handleChangePassword}
                            />

                        </div>

                    </div>
                    {/*auth__form-login-submit-button-enter для верного роута*/}
                    {/*sign in*/}
                    <button className="auth__form-login-submit-button auth__form-login-submit-button-enter"
                            type="submit">Войти
                    </button>

                    {/*для верного роута  auth__login-signup-Do_Register-enter*/}
                    <div className="auth__login-signup-container">

                        {/*sign-up*/}
                        < Link to="/sign-up" className="auth__login-signup-nonDecoration">
                            <div
                                className="auth__login-signup-Do_Register auth__signup-link auth__login-signup-Do_Register-enter ">
                                Еще не зарегистрированы?
                            </div>

                            <p className="auth__login-signup-nonDecoration">
                                <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color auth__login-signup-Do_Register-enter">Регистрация
                                </p>
                            </p>
                        </Link>


                    </div>
                </form>
            </div>
        </>
 )
}

export default Login;