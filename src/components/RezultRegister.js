import React from "react";
import './RezultRegister.css';
import './Profile.css';
import './HeaderRezultRegisterWelcome.css';
import './Header.css';
import './Footer.css';

import '../index.css';

function RezultRegister(props) {

        return(
            <form className="profile">
                <div className="profile__title">Привет, Андрей!
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
    }
export default RezultRegister;