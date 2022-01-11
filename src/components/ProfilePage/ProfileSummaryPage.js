import React, {useEffect, useState} from "react";
import './/ProfileSummaryPage.css';
import '../Profile.css';
import '../SignUpPage/SignUpHeader.css';
import '../Header.css';
import '../Footer.css';

import '../../index.css';
import apiAuth from "../../utils/MainApi";

function ProfileSummaryPage(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        apiAuth.checkToken().then((res) => {
            setName(res.name);
            setEmail(res.email)
        })
    }, []);

    function handleSubmitProfile(evt) {
        evt.preventDefault();
        props.handleUpdateProfile({
            name: name,
            email: email,
        })
    }

    function onUpdateName(evt) {
        setName(evt.target.value)
    }

    function onUpdateEmail(evt) {
        setEmail(evt.target.value)
    }

    return (
        <form className="result">
            <div className="result__title">Привет {name}!
                <div className="result__name-name">
                    <div className="result__name">Имя:</div>

                    <div name="profile__input-name">
                        <input type='text' className="result__input-name"
                               required value={name}
                               maxLength="30" minLength="2"
                               onChange={onUpdateName}
                        /></div>

                </div>
                <div className="result__email-email ">
                    <div className="result__email ">E-mail:</div>

                    <div name="profile__input-email">
                        <input type='text' className="result__input-email " name="email"
                               onChange={onUpdateEmail}
                               required value={email}
                               maxLength="30" minLength="2"/></div>

                </div>
                <div className="result__edit-nondecoration">
                    <div className="result__edit"
                         onClick={handleSubmitProfile}
                    >Редактировать
                    </div>
                </div>
                <a href="/" className="result__edit-nondecoration">
                    <div className="result__exit ">Выйти из аккаунта</div>
                </a>

            </div>
        </form>
    )
}
export default ProfileSummaryPage;