import React from "react";
import './RezultRegister.css';
import './HeaderRezultRegisterWelcome.css';
//import './HeaderRezultLoginWelcome.css';
import './Header.css';

import '../index.css';
import logo from "../images/logo.svg";

function HeaderRezultLoginWelcome(props) {

    return (
        <header className="header">

            <div className="header__logo header__logo_welcome">
                <img className="headerLogo" src={logo} alt="Logo"/>
            </div>
            <p className="header__welcome">Рады видеть!
            </p>
        </header>

    )
}
export default HeaderRezultLoginWelcome;