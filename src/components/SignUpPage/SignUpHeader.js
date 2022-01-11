import React from "react";
import '../ProfilePage/ProfileSummaryPage.css';
import './SignUpHeader.css';

import '../../index.css';
import logo from "../images/logo.svg";

function SignUpHeader(props) {

    return (
        <header className=" header__signup header__signin">
            <a href = "/" className=" header__logo_welcome">
                <div className="header__logo {/*header__logo_welcome*/}">

                        <img className="headerLogo" src={logo} alt="Logo"/>
                </div></a>
                <p className="header__welcome ">Добро пожаловать!
                </p>
        </header>

    )
}
export default SignUpHeader;
