import React from "react";
import './HeaderSavedFilms.css'
import '../Header.css';
import logo from '../../components/images/logo.svg';
import '../../index.css';

function HeaderSavedFilms(props) {
    return (
        <div className="header header_inwork">
            <a href="/" className="header__logo">
                <div className="header__logo">
                    <img className="headerLogo" src={logo} alt="Logo"/>
                </div>
            </a>

            <div className="header__films-akkaunt">
                <div className="header__film-saved_film">

                    <a href="/movies" className="header__name_saved-film">
                        <div className="header__name_saved-film">Фильмы</div>
                    </a>


                    <a href="/saved-movies">
                        <div className="header__auth">Сохраненные фильмы</div>
                    </a>
                </div>

                <a href="/profile">
                    <div className="header__akkaunt">Аккаунт
                    </div>
                </a>
            </div>
        </div>);
}

export default HeaderSavedFilms;
