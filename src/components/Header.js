
import React from "react";
import logo from '../logo.svg';
import '../index.css';
import '../components/Header.css';
import fotoMe from "../images/AboutMe/fotoMe.JPG";
//import {Link, Route, Switch} from "react-router-dom";
/* sing-up регистрация
* sing-in вход*/

/* Если залогинился и нажал на выход-Выйти*/

function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <img alt="logo" className="logo" src={logo}/>
                </div>

            {/*    <Switch>
                    <Route exact path='/'>*/
                /*        <div className="auth__correct-logo-exit-email">*/
                      /*  <div className="auth__exit">*/
                      {/*      <span className="auth__header-email">{props.email}</span>
                            <Link to='/sign-in' onClick={props.handleSignOut} className="auth__header-exit">*!/*/}}
                            <span>Выйти</span>
                     {/*       </Link>
                        </div>
                    </Route>
                    <Route exact path='/sign-in'>
                        <Link to='/sign-up' className="auth__header-exit">*/}
                            <span>Регистрация</span>
                       {/* </Link>
                    </Route>
                    <Route exact path='/sign-up'>
                        <Link to='/sign-in' className="auth__header-exit">
                            <span>Войти</span>
                        </Link>
                    </Route>
                </Switch>*/}


        </header>
)
}

export default Header;

