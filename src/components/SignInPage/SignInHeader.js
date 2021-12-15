import React from "react";
import '../ProfilePage/ProfileSummaryPage.css';
import '../SignUpPage/SignUpHeader.css';
import './SignInHeader.css';
import '../Header.css';

import '../../index.css';
import logo from "../images/logo.svg";

function SignInHeader(props) {

    return (
        <header className=" header__signin header__signup">
            <a href = "/" className="header__logo_welcome">
            <div className="header__logo ">

                    <img className="headerLogo " src={logo} alt="Logo"/>
            </div>
            </a>
            <p className="header__welcome">Рады видеть!
            </p>
        </header>

    )
}
export default SignInHeader;