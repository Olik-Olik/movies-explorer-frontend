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
    const [info, setInfo] = useState('');
    const buttonClassNameAppearDisabled = `${!valid ? "auth__form-login-submit-button" : "auth__form-login-submit-button_hidden"}`

    function handleChangeName(evt) {
        if (evt.target.value < 2 && evt.target.value > 30) {
            setInfo("Введите > 2 символов, но < 30")
        } else {
            setInfo('');
        }
        setName(evt.target.value);
    }

    function handleChangeEmail(evt) {
        if (evt.target.value < 2) {
            setInfo("Введите > 2 символов")
        } else {
            setInfo('');
        }
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        if (evt.target.value < 8) {
            setInfo("Что-то пошло не так...")
        } else {
            setInfo('');
        }
        setPassword(evt.target.value);
    }

    function handleSubmitRegister(evt) {
        evt.preventDefault();
        if (name || email || password) {
            return;
        }
        props.handleRegister(name, email, password);
    }

    useEffect(() => {
        if (props.loggedIn) {
        }
    }, [props.loggedIn]);

    useEffect(() => {
            (name && email && password) ? setValid(true) : setValid(false)
        },
        [name, email, password]);
    /*если трушно показывать кнопку*/
    return (
        <>
            <div className="auth">
                {/*  <div className="auth__form-login">*/}
                <form onSubmit={handleSubmitRegister}
                      className="auth__form-login">

                    <label className="label__input profile-name"> Имя
                    </label>

                    <form name="form__input_name">
                        <input type='text'
                               className="profile__input-name auth__form-login-input-email"
                               name="name"
                               value={name || ""}
                               required
                               maxLength="30"
                               minLength="2"
                               onChange={handleChangeName}/>
                   {/*     <div className="setinfo__error">{info}</div>*/}
                    </form>

                    <div className="profile__email-email ">
                        <label className="label__input profile__email"> E-mail</label>
                        <form name="profile__input-email">
                            <input type='text'
                                   className="auth__form-login-input-email"
                                   name="email"
                                /*   defaultValue="pochta@newtree.ru"*/
                                   required
                                   maxLength="30" minLength="2"
                                   value={email || ""}
                                /*  placeholder="Email"*/
                                   onChange={handleChangeEmail} />
                            {/*     <div className="setinfo__error">{info}</div>*/}
                        </form>

                    </div>
                    <div className="profile__email-email  profile__email-password">

                        <label className="profile__email"> Пароль
                        </label>

                        <form name="profile__input-password">

                            <input type='password'
                                   name="password"
                                /*     className="auth__form-login-input-password"*/
                                   className={`auth__form-login-input-password ${info ? "info__error" : ''}`}
                                   required
                                   value={password || ""}
                                   minLength="8" maxLength="30"
                                   onChange={handleChangePassword}
                            />

                      {/*      <div className="setinfo__error profile__email profile__email-password"
                                 disabled={!valid}> Что-то пошло не так... {info}
                            </div>*/}
                                 <div className="setinfo__error">{info}</div>
                        </form>

                    </div>
                    {/*причем-то невалидном кнопка не должна быть видна/активна*/}
                    <a href="/sign-in"
                       className="auth__login-signin">
                        <button className={buttonClassNameAppearDisabled}
                                 //   "auth__form-login-submit-button"
                                type="submit"
                                disabled={!valid}
                        >Зарегистрироваться
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