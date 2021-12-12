
import React from "react";
import './Header.css';
/*import logo from '../images/logo.svg';
import Image_world from "../images/Image_world.svg";*/
import {Link, Route, Switch} from "react-router-dom";
import '../index.css';
import Logo from "./Logo";
import Project from "./AboutPage/ProjectPage/Project";



 /*
<>
       <Switch>
            <Route exact path='/'>
                <div className="auth__correct-logo-exit-email">
                    <span className="auth__header-email">{props.email}</span>
                    <Link to='/sign-in' onClick={props.handleSignOut} className="auth__header-exit">
                        <span>Выйти</span>
                    </Link>
                </div>
            </Route>
            <Route exact path='/sign-in'>
                <Link to='/sign-up' className="auth__header-exit">
                    <span>Регистрация</span>
                </Link>
            </Route>
            <Route exact path='/sign-up'>
                <Link to='/sign-in' className="auth__header-exit">
                    <span>Войти</span>
                </Link>
            </Route>
        </Switch>
    <Project> </Project>
    </>
    )}
*/
function Header(props) {
    return (
        <header className="header">
            <div className="header__logo_auth_exit">
              {/*  <div className="header__logo">
                <img className="headerLogo" src={logo} alt="Logo"/>
                </div>*/}
                <Logo/>

<div className="header__all">
              <div  className="header__button">

        {/* <form action = "/sign-up" target="_blank">
             <button className="header__auth" >Регистрация*/}
                  <a href = "/sign-up" className="header__auth" >Регистрация</a>
            {/* </button>*/}
       {/*  </form>*/}
         </div>

            <div  className="header__button">
                <form action="/sign-in" >
                <button className="header__exit" >Войти
           </button>
                </form>
                </div>


{/*    <a href = "/sign-up" className="header__exit" >Войти</a>
     </button>*/}

</div>

</div>
        </header>
            )
}
            export default Header;


{/*

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
                         </div>
                </div>
                     <img src={Image_world} className="image_world" alt="непонятная картинка" />

                    <button className="header__button_down" onClick={' пока нету такого'}>
                        <p>Узнать больше</p>
                    </button>
    }

*/}



