/* РЕГИСТРАЦИЯ*/
//для авторизации
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Register.css';
import './HeaderInwork.css';
import './Profile.css';
import './Footer.css';
import './HeaderResultLoginWelcome.css';
import '../components/HeaderRezultRegisterWelcome';
import '../index.css';
import '../components/Register.css';
import HeaderRezultRegisterWelcome from './HeaderRezultRegisterWelcome';
import logo from "../images/logo.svg";


function Register(props){
    return(
        <>

        <HeaderRezultRegisterWelcome/>
{/*            function Register(props) {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');

            function handleChangeEmail(evt) {
            setEmail(evt.target.value);
        }

            function handleChangePassword(evt) {
            setPassword(evt.target.value);
        }

            function handleSubmitRegister(evt) {
            evt.preventDefault();
            if (!password || !email) {
            return;
        }
            props.handleRegister(password, email);
        }*/}


            <div className="auth">
          {/*  <p className="auth__login-welcome">Регистрация</p>*/}

     {/*       <form onSubmit={handleSubmitRegister}
            className="auth__form-login">
            <input
            className="auth__form-login-input-email "
            required
            name="email"
            type="email"
            value={email || ""}
            placeholder="Email"

            onChange={handleChangeEmail}/>
            <input className="auth__form-login-input-password"
            required
            name="password"
            type="password"
            value={password || ""}
            placeholder="Пароль"
            onChange={handleChangePassword}/>*/}

{/*
            <button className="auth__form-login-submit-button "
            type="submit">Зарегистрироваться
            </button>

            <Link to="/sign-in"
            className="auth__login-signup-Do_Register auth__signup-link">
            Уже зарегистрированы? Войти</Link>*/}

                <div className="auth__form-login">
                    <div className="profile__name">Имя</div>
                    <div className= "profile__input-name">Вася</div>
                </div>
                <div className="profile__email-email ">
                    <div className= "profile__email ">E-mail</div>
                    <div className= "auth__form-login-input-email">pochta@newtree.ru</div>
                </div>
                <div className="profile__email-email  profile__email-password">
                    <div className= "profile__email ">Пароль</div>
                    <div className= "auth__form-login-input-password">pochta@newtree.ru</div>
                </div>
            <button className="auth__form-login-submit-button"
                    type="submit">Зарегистрироваться
            </button>

               <div className="auth__login-signup-container">
                <div className="auth__login-signup-Do_Register auth__signup-link">
                    Уже зарегистрированы?</div>
                <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color" >Войти
                </p>
            </div></div>
            </>
    )
}
export default Register;