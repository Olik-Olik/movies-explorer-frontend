import React from "react";
import './MenuPopup.css';
import '../../index.css';
function MenuPopup(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""} popup_type_image`}>
            <div className="popup__combine-image">

                <div>
                    <button type="button"
                            onClick={props.onClose}
                            aria-label='Закрыть'
                            className="popup__close-button popup__close-button-no-rel"
                    />
                </div>

                <div className= "popup-correct">
                <div className="popup__combine-word">
                    <div className="popup__container-image">

                        <a href="/">
                            <div className="{header__akkaunt  mobile-main mobile-visibility">Главная
                            </div>
                        </a>
                        <a href="/movies" className="header__name_saved-film">
                            <div className="header__name_saved-film mobile-visibility">Фильмы</div>
                        </a>

                        <a href="/saved-movies">
                            <div className="header__auth mobile-visibility mobile-saved-films">Сохраненные фильмы</div>
                        </a>
                    </div>
                </div>
                <a href="/profile"> <div className=" mobile-akkaunt">Аккаунт </div></a>
            </div>
            </div>
        </div>
            );
            }

            export default MenuPopup;