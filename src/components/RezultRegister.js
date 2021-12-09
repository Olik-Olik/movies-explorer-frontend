import React from "react";
import './RezultRegister.css';
import './Profile.css';
import './HeaderRezultRegisterWelcome.css';
import './Header.css';
import './Footer.css';

import '../index.css';

function RezultRegister(props) {

        return(
            <form className="result">
                <div className="result__title">Привет Я!
                    <div className="result__name-name">
                        <div className="result__name">Имя</div>
                        <div className= " result__name result__input-name">Коротколапка</div>
                    </div>
                    <div className="result__email-email ">
                        <div className= "result__email ">E-mail</div>
                        <div className= "result__input-name result__input-email">pochta@newtree.ru</div>
                    </div>


                    <div className="result__edit">Редактировать</div>
                    <div className= "result__exit result__edit"> Выйти из аккаунта</div>

                </div>
            </form>
        )
    }
export default RezultRegister;