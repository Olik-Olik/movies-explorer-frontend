import React from "react";
import './/ProfileSummaryPage.css';
import '../Profile.css';
import '../SignUpPage/SignUpHeader.css';
import '../Header.css';
import '../Footer.css';

import '../../index.css';

function ProfileSummaryPage(props) {
        return(
            <form className="result">
                <div className="result__title">Привет Я!
                    <div className="result__name-name">
                        <div className="result__name">Имя</div>
                        <div className= " result__name result__input-name">Олик</div>
                    </div>
                    <div className="result__email-email ">
                        <div className= "result__email ">E-mail</div>
                        <div className= "result__input-name result__input-email">pochta@newtree.ru</div>
                    </div>
                    <a href = "/sign-in">
                    <div className="result__edit">Редактировать</div>
                </a>
                    <a href = "/">
                    <div className= "result__exit result__edit"> Выйти из аккаунта</div>
                    </a>

                </div>
            </form>
        )
    }
export default ProfileSummaryPage;