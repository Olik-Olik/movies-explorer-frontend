import React, {useEffect, useState} from "react";
import './/ProfileSummaryPage.css';
import '../Profile.css';
import '../SignUpPage/SignUpHeader.css';
import '../Header.css';
import '../Footer.css';

import '../../index.css';
import apiAuth from "../../utils/MainApi";

function ProfileSummaryPage(props) {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');

    useEffect(() => {
        apiAuth.checkToken().then((res) => {
            setName(res.name);
            setEmail(res.email)
        })
    }, []);

        return(
            <form className="result">
                <div className="result__title" >Привет {(name)}!
                    <div className="result__name-name">
                        <div className="result__name" >Имя: {name}</div>

                        <form name="profile__input-name" >
                            <input type = 'text' className="result__input-name"
                                   required
                                   maxLength="30" minLength="2"
                            /> </form>

                    </div>
                    <div className="result__email-email ">
                        <div className= "result__email ">E-mail: {email} </div>

                        <form name="profile__input-email">
                            <input type = 'text' className="result__input-email " name="email"

                                   required
                                   maxLength="30" minLength="2" /> </form>

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