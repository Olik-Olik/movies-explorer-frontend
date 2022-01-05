import React from 'react';
import './Profile.css';
import './HeaderInwork.css';
import './Header.css';
import './Footer.css';
import '../index.css';
import HeaderSavedFilms from "./HeaderInwork";


function Profile(props) {
    return (
        <>
            <HeaderSavedFilms>

            </HeaderSavedFilms>
            <form className="profile auth">Привет,Олюсик!

                <div className="auth">
                    <div className="auth__form-login">
                        <div className="profile__name">Имя</div>
                        <div className="profile__input-name auth__form-login">Олюсик!</div>
                    </div>
                    <div className="profile__email-emailauth">
                        <div className="profile__email ">E-mail</div>
                        <div className="auth__reg-form-login-input-email">pochta@newtree.ru</div>
                    </div>

                    <div className="auth__form-login-submit-button"
                         type="submit">Редактировать
                    </div>

                    <div className="auth__login-signup-container">
                        <div className="auth__login-signup-Do_Register auth__signup-link">
                            Выйти из аккаунта
                        </div>

                    </div>
                </div>

            </form>
        </>
    )
}


export default Profile;