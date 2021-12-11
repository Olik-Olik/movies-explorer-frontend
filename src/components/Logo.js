import React from "react";
import './Logo.css';
import logo from './images/logo.svg';
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

         /* <form action = "/" target="_blank">*/
        <a href = "/">
            <img className="logotip" src={logo} alt="Logo"/></a>
        /*  </form>*/
            )}

export default Logo;