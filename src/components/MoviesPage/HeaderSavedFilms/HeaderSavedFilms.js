import React, {useState} from "react";
import './HeaderSavedFilms.css'
import '../../Header.css';
import logo from '../../images/logo.svg';
import icon_header from '../../images/icon_header.svg';
import '../../../index.css';
import MenuPopup from "../../MenuPopup/MenuPopup";

function HeaderSavedFilms(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuOpenClick(evt) {
        console.log("I'm a walrus!!! Обработчик меню....")
        setIsMenuOpen(true);
    }

    function handleMenuCloseClick(evt) {
        console.log("I'm a walrus!!! Обработчик закрытия меню....")
        setIsMenuOpen(false);
    }

    return (

        <div className="header__logo-akkaunt">
            <div className="header__logo-films">
                <div className="header header-color">
                    <a href="/">
                        <div className="header__logo">
                            <img className="headerLogo" src={logo} alt="Logo"/>
                        </div>
                    </a>

                    <div className="header__films-akkaunt">
                        <div className="header__film-saved_film">
                            <a href="/movies" className="header__name_saved-film-movies">
                                <div className="header__name_saved-film">Фильмы</div>
                            </a>
                            <a href="/saved-movies" className="header__name_saved-film-movies">
                                <div className="header__auth">Сохраненные фильмы</div>
                            </a>
                        </div>
                    </div>
                    {/*header__logo-films*/}
                </div>
                <div className= "combo">
                <a href="/profile">
                    <div className="header__user">Аккаунт</div></a>
                    <img className="headerIcon" src={icon_header} alt="Решетка" onClick={ handleMenuOpenClick } />
            </div>
            </div>
            <MenuPopup isOpen={isMenuOpen}
                onClose={handleMenuCloseClick}/>
        </div>


)

}

export default HeaderSavedFilms;

