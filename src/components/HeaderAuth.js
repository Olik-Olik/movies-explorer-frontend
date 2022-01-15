import React from "react";
import './Header.css';
import '../index.css';
import logo from "./images/logo.svg";

function HeaderAuth(props) {
    return (
        <header className="header">
            <div className="header__logo_auth_exit">
                <a href = "/auth">
                    <img className="logotip" src={logo} alt="Logo"/></a>

                    <a href="/movies"  className= "header__auth ">Фильмы
                    </a>

                        <a href="/saved-movies" className="  header__auth">Сохраненные фильмы
                        </a>
                    </div>

                    <div className="header__button">
                        <a href="/profile" className="header__auth akkaunt">Аккаунт</a>
                    </div>
        </header>
    )
}
export default HeaderAuth;
