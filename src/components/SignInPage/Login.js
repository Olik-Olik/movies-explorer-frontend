/* Логин*/

import React from 'react';
//import './Register.css';
// import './HeaderInwork.css';
import '../Profile.css';
import '../Footer.css';
//import './SignInHeader.css';
// import './SignUpHeader';
import '../../index.css';


function Login(props) {
    return (
        <>
            {/*<SignUpHeader/>*/}
            <div className="auth">

                <div className="profile__email-email ">
                    <div className="profile__email ">E-mail</div>
                    <div className="auth__form-login-input-email">pochta@newtree.ru</div>
                </div>
                <div className="profile__email-email  profile__email-password">
                    <div className="profile__email ">Пароль</div>
                    <div className="auth__form-login-input-password">pochta@newtree.ru</div>
                </div>
                {/*auth__form-login-submit-button-enter для верного роута*/}
                <button className="auth__form-login-submit-button auth__form-login-submit-button-enter"
                        type="submit">Войти
                </button>

                {/*для верного роута  auth__login-signup-Do_Register-enter*/}
                <div className="auth__login-signup-container">
                    <div className="auth__login-signup-Do_Register auth__signup-link auth__login-signup-Do_Register-enter ">
                        Еще не зарегистрированы?
                    </div>
                    {/*для верного роута  auth__login-signup-Do_Register-enter*/}
                    <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color auth__login-signup-Do_Register-enter">Регистрация
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;