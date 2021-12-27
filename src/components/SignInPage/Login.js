/* Логин*/

import React, {useState} from 'react';
//import './Register.css';
// import './HeaderInwork.css';
import '../Profile.css';
import '../Footer.css';
//import './SignInHeader.css';
// import './SignUpHeader';
import '../../index.css';
import {Link, useHistory} from "react-router-dom";


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmitLogin(evt) {
        evt.preventDefault();
        props.handleLogin(password, email).then(() => {
                // history.push('/movies')
            }
        );
    }

    return (
        <>
            {/*<SignUpHeader/>*/}
            <div className="auth">
                <form onSubmit={handleSubmitLogin}
                      className="profile__email-email">

                    <div className="profile__email-email ">
                        <label className="profile__email ">E-mail</label>
                        <div className="profile__input-email">
                            <input type='text'
                                   className="auth__form-login-input-email"
                                   name="email"
                               /*    defaultValue="byka@newtree.ru"*/
                                   required
                                   maxLength="30" minLength="2"
                                   value={email || ""}
                                   placeholder="Email"
                                   onChange={handleChangeEmail}/></div>
                    </div>
                    <div className="profile__email-email  profile__email-password">

                        <label className="profile__email ">Пароль</label>

                        <div className="profile__input-password">
                            <input
                                className="auth__form-login-input-password profile__input-password"
                            /*    defaultValue="qwerty"*/
                                required
                                maxLength="8" minLength="2"
                                name="password"
                                type="password"
                                value={password || ""}
                                placeholder="Пароль"
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
                        <Link href="/sign-up" className="auth__login-signup-nonDecoration">
                            <div
                                className="auth__login-signup-Do_Register auth__signup-link auth__login-signup-Do_Register-enter ">
                                Еще не зарегистрированы?
                            </div>
                        </Link>
                        {/*для верного роута  auth__login-signup-Do_Register-enter*/}
                        <Link href="/sign-up" className="auth__login-signup-nonDecoration">
                            <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color auth__login-signup-Do_Register-enter">Регистрация
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;