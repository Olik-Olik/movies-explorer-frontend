import React from "react";
import './Header.css';
import '../index.css';
import Logo from "./Logo";

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo_auth_exit">
                <Logo/>
                <div className="header__all">
                    <div className="header__button">
                        <a href="/sign-up" className="header__auth">Регистрация</a>
                    </div>

                    <div className="header__button">
                        <form action="/sign-in">
                            <button className="header__exit">Войти
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
