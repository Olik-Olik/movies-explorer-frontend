import React, {useContext, useState} from 'react';

import '../Profile.css';
import '../Footer.css';
import '../../index.css';
import {Link, useHistory,} from "react-router-dom";
import {CurrentUserContext} from '../../utils/context/CurrentUserContext';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [info, setInfo] = useState('');

    let currentUserContext = useContext(CurrentUserContext);

    function handleChangeEmail(evt) {
        const emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(evt.target.value);

        if (emailValidation) {
            setInfo(' ')
        } else {
            setInfo('Нужен Email похожий на настоящий!')
        }
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);

    }


    function handleSubmitLogin(evt) {
        evt.preventDefault();
        if (!email || !password) {
            return;
        }
        props.handleLogin(email, password)
            .then((response) => {
                    console.log('BR');
                    currentUserContext = true;
                    history.push({
                        pathname: '/movies',
                        state: {
                            authenticated: true,
                            access_token: response.access_token,
                            token_type: response.token_type,
                            expires_in: response.expires_in,
                            scope: response.scope },
                    });
                    console.log('AR');
                }
            )
            .catch((err) => {
                console.log(err);
            });
        console.log('EF');
    }

    return (
        <>
            <div className="auth">  <div className="setinfo__error">{props.info}</div>
                <form
                    onSubmit={handleSubmitLogin}
                    className="profile__email-email">

                    <div className="profile__email-email ">
                        <label className="profile__email ">E-mail
                            <div className="profile__input-email">
                                <input type='text'
                                       className="auth__form-login-input-email"
                                       name="email"
                                       required
                                       maxLength="30" minLength="2"
                                       value={email}
                                       onChange={handleChangeEmail}/>
                                <div className="setinfo__error">{info}</div>
                            </div>
                        </label>
                    </div>

                    <div className="profile__email-email  profile__email-password">
                        <label className="profile__email ">Пароль </label>
                        <div className="profile__input-password">
                            <input
                                className="auth__form-login-input-password profile__input-password"
                                required
                                minLength="8"
                                maxLength="30"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                            />

                        </div>
                    </div>
                    {/*sign in*/}
                    <button className="auth__form-login-submit-button auth__form-login-submit-button-enter"
                            type="submit">Войти
                    </button>
                    <div className="auth__login-signup-container">

                        {/*sign-up*/}
                        < Link to="/sign-up" className="auth__login-signup-nonDecoration">
                            <div className="correct">
                            <div className="auth__login-signup-Do_Register auth__signup-link auth__login-signup-Do_Register-enter ">
                                Еще не зарегистрированы?
                            </div>

                            <div className="auth__login-signup-nonDecoration">
                                <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color auth__login-signup-Do_Register-enter">Регистрация
                                </p>
                            </div>
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
