/*

import React from "react";
import './Header.css';
import logo from '../logo.svg';
/!*import '../index.css';*!/
/!*import '../components/Header.css';*!/

import {Link, Route, Switch} from "react-router-dom";
import fotoMe from "../images/AboutMe/fotoMe.JPG";
/!* sing-up регистрация
* sing-in вход*!/

/!* Если залогинился и нажал на выход-Выйти*!/


function Header() {
    return (
        <header className="header">ggggg
        </header>
    );
}
export default Header;

           {/!* <div className="logotip">
                <img alt="logo" className="logo" src={logo}/>
                </div>*!/}

            {/!*    <Switch>
                    <Route exact path='/'>*!/
                /!*        <div className="auth__correct-logo-exit-email">*!/
                      /!*  <div className="auth__exit">*!/
                      {/!*      <span className="auth__header-email">{props.email}</span>
                            <Link to='/sign-in' onClick={props.handleSignOut} className="auth__header-exit">*!/!*!/}}
               {/!*             <span>Выйти</span>*!/}
                     {/!*       </Link>
                        </div>
                    </Route>
                    <Route exact path='/sign-in'>
                        <Link to='/sign-up' className="auth__header-exit">*!/}
                       {/!*     <span>Регистрация</span>*!/}
                       {/!* </Link>
                    </Route>
                    <Route exact path='/sign-up'>
                        <Link to='/sign-in' className="auth__header-exit">
                            <span>Войти</span>
                        </Link>
                    </Route>
                </Switch>*!/}
*/

import React from "react";
import './Header.css';
import logo from '../images/logo.svg';
import Image_world from "../images/Image_world.svg";

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo_auth_exit">
                <div className="header__logo">
                <img className="headerLogo" src={logo} alt="Logo"/>
                </div>
<div className="header__all">
              <div  className="header__button">
        <button className="header__auth" onClick={' Регистрация '}>Регистрация
        </button></div>

            <div  className="header__button">
                <button className="header__exit" onClick={' Выйти-Войти '}>Войти
           </button></div>
</div>

</div>


<div className="header__container">
            <div>
                <div className="header__description">
                    Учебный проект студента факультета Веб-разработки.
                </div>
                <div className="header__content">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </div>
            </div>
                <img className="header__foto" src={Image_world} alt="Фотка"/>
                {/*     </div>*/}
            </div>
                {/* <img src={image_world} className="image_world" alt="непонятная картинка" />*/}

                <button className="header__button" onClick={'{/* пока нету такого*/}'}>
                    <p>Узнать больше</p>
                </button>

        </header>);

}

//rel="noopener noreferrer"
// улучшают безопасность веб-сайта
export default Header;

