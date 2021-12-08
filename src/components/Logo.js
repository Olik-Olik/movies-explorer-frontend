import React from "react";
import './Logo.css';
import logo from '../images/logo.svg';
import '../index.css';

function Logo(props) {
    return (
    /*    <logotip className="header">
            <div className="header__logo_auth_exit">
                <div className="header__logo">
                    <img className="headerLogo" src={logo} alt="Logo"/>
                </div>
            </div>
        </logotip> */

            <img className="logotip" src={logo} alt="Logo"/>

            )}

export default Logo;