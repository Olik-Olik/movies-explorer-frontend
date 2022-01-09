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

                        <form name="profile__input-name">
                            <input type = 'text' className=" result__input-name"
                                   required
                                   maxLength="30" minLength="2" /> </form>

                      {/*  <div className= " result__name result__input-name">Олик</div>*/}
                    </div>
                    <div className="result__email-email ">
                        <div className= "result__email ">E-mail</div>

                        <form name="profile__input-email">
                            <input type = 'text' className="result__input-email " name="email"

                                   required
                                   maxLength="30" minLength="2" /> </form>

                  {/*      <div className= "result__input-name result__input-email">pochta@newtree.ru</div>*/}
                    </div>
                    <a href = "/sign-in" className= "result__edit-nondecoration">
                    <div className="result__edit">Редактировать</div>
                </a>
                    <a href = "/" className= "result__edit-nondecoration">
                    <div className= "result__exit "> Выйти из аккаунта</div>
                    </a>

                </div>
            </form>
        )
    }
export default ProfileSummaryPage;