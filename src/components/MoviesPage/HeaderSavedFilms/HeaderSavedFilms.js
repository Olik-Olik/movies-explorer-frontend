
import React from "react";
import './HeaderInwork.css'
import '../../Header.css';
import logo from '../../../images/logo.svg';
import Image_world from "../../../images/Image_world.svg";
import '../../../index.css';

function HeaderSavedFilms(props) {
    return (
        <div className="header header_inwork">
         <div className="header__logo">
           <img className="headerLogo" src={logo} alt="Logo"/>
          </div>
<div className="header__films-akkaunt">
         <div className="header__film-saved_film">
          <div className="header__name_saved-film">Фильмы</div>
          <div className="header__auth" >Сохраненные фильмы</div>
         </div>
       <div className="header__akkaunt" >Аккаунт Васи
       </div>

        </div>
        </div>);

}

export default HeaderSavedFilms;

