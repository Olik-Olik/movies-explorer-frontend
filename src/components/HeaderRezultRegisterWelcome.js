import React from "react";
import './RezultRegister.css';
import './HeaderRezultRegisterWelcome.css';
import './Header.css';

import '../index.css';
import logo from "../images/logo.svg";

function RezultRegisterWelcome(props) {

    return (
        <header className="header">

                <div className="header__logo header__logo_welcome">
                    <img className="headerLogo" src={logo} alt="Logo"/>
                </div>
                <p className="header__welcome">Добро пожаловать!
                </p>
        </header>

    )
}
export default RezultRegisterWelcome;