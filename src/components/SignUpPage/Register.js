/* РЕГИСТРАЦИЯ*/
import React, {useEffect, useState} from 'react';
import './Register.css';
import '../Profile.css';
import '../Footer.css';
import '../SignInPage/SignInHeader.css';
import '../../index.css';
import {useHistory} from "react-router-dom";
function Register(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState({});
    const [valid, setValid] = useState(false);

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmitRegister(evt) {
        evt.preventDefault();
        if (!name || !email || !password )  {
            return;
        }
        props.handleRegister(name, email, password);
    }

    useEffect(() => {
        if (props.loggedIn) {
            // history.push('/')
        }
    }, [props.loggedIn]);

    /*   useEffect(() =>  {
               (name && email && password) ? {valid(true) : valid(false)},
           [name, email, password]);*/

    return (
        <>
            <div className="auth">
                {/*  <div className="auth__form-login">*/}

                <form onSubmit={handleSubmitRegister} className="auth__form-login">

                    <label className="label__input profile-name">Имя</label>

                    <form name="form__input_name">
                        <input type='text'
                               className="profile__input-name"
                               name="name"
                               value={name || ""}
                   /*            defaultValue="Олик"*/
                               required
                               maxLength="30" minLength="2"
                            /*   placeholder="Name"*/
                               onChange={handleChangeName}

                        />
                    </form>


                    <div className="profile__email-email ">
                        <label className="label__input profile__email">E-mail</label>

                        <form name="profile__input-email">

                            <input type='text'
                                   className="auth__form-login-input-email"
                                   name="email"
                                /*   defaultValue="pochta@newtree.ru"*/
                                   required
                                   maxLength="30" minLength="2"
                                   value={email || ""}
                                /*  placeholder="Email"*/
                                   onChange={handleChangeEmail}
                            />
                        </form>

                    </div>
                    <div className="profile__email-email  profile__email-password">

                        <label className="profile__email">Пароль</label>

                        <form name="profile__input-password">

                            <input type='password'
                                   name="password"
                                   className="auth__form-login-input-password"
                            /*       defaultValue="qwerty"*/
                                   required
                                   value={password || ""}
                                   minLength="8"
                                /*     placeholder="Пароль"*/
                                   onChange={handleChangePassword}
                            />
                        </form>

                    </div>
                    <a href="/sign-in"
                       className="auth__login-signin">
                        <button className="auth__form-login-submit-button"
                                type="submit">Зарегистрироваться
                        </button>
                    </a>
                </form>
                    <div className="auth__login-signup-container">

                        <a href="/sign-in" className="auth__login-signin">
                            <div className="auth__login-signup-Do_Register auth__signup-link">
                                Уже зарегистрированы?
                            </div>

                            <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color">Войти
                            </p>
                        </a>
                    </div>

            </div>
        </>
    )
}

export default Register;