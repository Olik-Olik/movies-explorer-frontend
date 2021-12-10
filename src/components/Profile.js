import React from 'react';
import './Profile.css';
import './HeaderInwork.css';
import './Header.css';
import './Footer.css';
import '../index.css';
import HeaderSavedFilms from "./HeaderInwork";


function Profile(props){
    return(

 /*       <form className="profile">
        <div className="profile__title">Привет,Олюсик!
            <div className="profile__name-name">
            <div className="profile__name">Имя</div>
                <div className= " profile__name profile__input-name">Коротколапка</div>
            </div>
                <div className="profile__email-email ">
                <div className= "profile__email ">E-mail</div>
                <div className= "profile__input-name profile__input-email">pochta@newtree.ru</div>
                </div>


            <div className="profile__edit">Редактировать</div>
            <div className= "profile__exit profile__edit"> Выйти из аккаунта</div>

        </div>
        </form>
    )
}*/

<>
    <HeaderSavedFilms></HeaderSavedFilms>
    <form className="profile auth">Привет,Олюсик!

<div className="auth">
<div className="auth__form-login">
    <div className="profile__name">Имя</div>
    <div className= "profile__input-name auth__form-login">Олюсик!</div>
</div>
<div className="profile__email-emailauth">
    <div className= "profile__email ">E-mail</div>
    <div className= "auth__reg-form-login-input-email">pochta@newtree.ru</div>
</div>

<div className="auth__form-login-submit-button"
        type="submit">Редактировать
</div>

<div className="auth__login-signup-container">
    <div className="auth__login-signup-Do_Register auth__signup-link">
        Выйти из аккаунта</div>

</div>
</div>

    </form>
</>
)
}


export default Profile;