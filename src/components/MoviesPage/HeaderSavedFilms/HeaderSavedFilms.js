
import React from "react";
import './HeaderSavedFilms.css'
import '../../Header.css';
import logo from '../../images/logo.svg';

import '../../../index.css';

function HeaderSavedFilms(props) {
    return (
        <div className="header__logo-akkaunt">
        <div className="header__logo-films">
        <div className="header header-color"
  /*      header__inwork" */
        >
            <a href = "/">
         <div className="header__logo">
           <img className="headerLogo" src={logo} alt="Logo"/>
         </div>
            </a>
<div className="header__films-akkaunt">
         <div className="header__film-saved_film">
             <a href = "/movies" className= "header__name_saved-film-movies">
          <div className="header__name_saved-film">Фильмы</div></a>
             <a href = "/saved-movies" className= "header__name_saved-film-movies">
          <div className="header__auth">Сохраненные фильмы</div></a>
         </div>
</div> {/*header__logo-films*/}
        </div>
    <a href = "/profile" className= "header__akkaunt-profile">
       <div className="header__user">Аккаунт
       </div>
    </a>
        </div>
        </div>);

}

export default HeaderSavedFilms;

