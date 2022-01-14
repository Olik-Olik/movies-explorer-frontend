import React from "react";
import './Logo.css';
import logo from './images/logo.svg';
import '../index.css';

function Logo(props) {
    return (
        <a href = "/">
            <img className="logotip" src={logo} alt="Logo"/></a>
            )
}

export default Logo;