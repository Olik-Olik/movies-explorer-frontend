/* РЕГИСТРАЦИЯ*/
//для авторизации
import React from 'react';
import './Register.css';
// import './HeaderInwork.css';
import '../Profile.css';
import '../Footer.css';
import '../SignInPage/SignInHeader.css';
// import './SignUpHeader';
import '../../index.css';


function Register(props) {
    return (
        <>
            {/*<SignUpHeader/>*/}
            <div className="auth">

                <div className="auth__form-login">
                    <div className="profile__name">Имя</div>
                    <div className="profile__input-name">Вася</div>
                </div>
                <div className="profile__email-email ">
                    <div className="profile__email ">E-mail</div>
                    <div className="auth__form-login-input-email">pochta@newtree.ru</div>
                </div>
                <div className="profile__email-email  profile__email-password">
                    <div className="profile__email ">Пароль</div>
                    <div className="auth__form-login-input-password">pochta@newtree.ru</div>
                </div>
                <a href = "/sign-in" className="auth__login-signin">
                <button className="auth__form-login-submit-button"
                        type="submit">Зарегистрироваться
                </button>
                </a>

                <div className="auth__login-signup-container">

                    <a href = "/sign-in" className="auth__login-signin">
                    <div className="auth__login-signup-Do_Register auth__signup-link">
                        Уже зарегистрированы?
                    </div>

                    <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color">Войти
                    </p>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Register;