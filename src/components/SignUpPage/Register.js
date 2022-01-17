/* РЕГИСТРАЦИЯ*/
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import './Register.css';
import '../Profile.css';
import '../Footer.css';
import '../SignInPage/SignInHeader.css';
import '../../index.css';

function Register(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordInfo, setPasswordInfo] = useState('');
    const [infoEmail, setInfoEmail] = useState('');
    const [valid, setValid] = useState(false);
    const [info, setInfo] = useState('');
    // const [infoSuccess, setInfoSuccess] = useState(false);
    //   const buttonClassNameAppearDisabled = `${!valid ? "auth__form-login-submit-button" : "auth__form-login-submit-button_hidden"}`

    function handleChangeName(evt) {
        if (evt.target.value.length < 2 || evt.target.value.length > 30) {
            setInfo("Введите > 2 символов, но < 30")
        } else {
            setInfo('');
        }
        setName(evt.target.value);
    }

    function handleChangeEmail(evt) {
        const lala = /\S+@\S+\.\S+/
        if (evt.target.value.length > 2 && (evt.target.value.match(lala))) {
            setInfoEmail('');
        } else {
            setInfoEmail("Введите > 2 символов и вообще, email должен быть похож на email")
        }
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        if (evt.target.value.length < 8) {
            setPasswordInfo("Что-то пошло не так...")
        } else {
            setPasswordInfo('');
        }
        setPassword(evt.target.value);
    }

    function handleSubmitRegister(evt) {
        evt.preventDefault();
        if (name && email && password) {
            props.handleRegister(name, email, password).then(() => {
                props.handleLogin(email, password).then((response) => {
                    console.log('Сабмит логин reg');
                    history.push({
                        pathname: '/movies',
                        state: {
                            authenticated: true,
                            access_token: response.access_token,
                            token_type: response.token_type,
                            expires_in: response.expires_in,
                            scope: response.scope },
                    });
                    console.log('ARR');
                })
            }).catch((err) => console.log('Фокус не удался!: ' + err.toString()))
        }
    }

      useEffect(() => {
          if (props.loggedIn) {
              setEmail("");
              setPassword("");
          }
      }, [props.loggedIn]);


    useEffect(() => {
            (name && email && password) ? setValid(true) : setValid(false)
        },
        [name, email, password]);
    return (
        <>
            <div className="auth">
                <div className="setinfo__error">{props.info}</div>
                <form onSubmit={handleSubmitRegister}
                      className="auth__form-login">

                    <label className="label__input profile-name"> Имя
                    </label>

                    <div name="form__input_name">
                        <input type='text'
                               className="profile__input-name auth__form-login-input-email"
                               name="name"
                               value={name}
                               required
                               maxLength="30"
                               minLength="2"
                               onChange={handleChangeName}/>
                        <div className="setinfo__error">{info}</div>
                    </div>

                    <div className="profile__email-email ">
                        <label className="label__input profile__email"> E-mail</label>
                        <div className="profile__input-email">
                            <input type='text'
                                   className="auth__form-login-input-email"
                                   name="email"
                                   required
                                   maxLength="30" minLength="2"
                                   value={email }
                                   onChange={handleChangeEmail}/>
                            <div className="setinfo__error">{infoEmail}</div>
                        </div>
                    </div>
                    <div className="profile__email-email  profile__email-password">

                        <label className="profile__email"> Пароль
                        </label>

                        <div className="profile__input-password">
                            <input type='password'
                                  // name="password"
                                   className={`auth__form-login-input-password ${info ? "info__error" : ''}`}
                                   required
                                   value={password }
                                   minLength="8" maxLength="30"
                                   onChange={handleChangePassword}
                            />
                            <div className="setinfo__error">{passwordInfo}</div>
                        </div>
                    </div>
                    <button className="auth__form-login-submit-button" type="submit"
                    >Зарегистрироваться
                    </button>
                    <div className="setinfo__error">{info}</div>

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
