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
                    <label className="profile__email ">E-mail</label>
                    {/*input*/}
              {/*      <label className= "label__input profile__email">E-mail</label>*/}
                    <form name="profile__input-email">
                        <input type = 'text' className="auth__form-login-input-email" name="email" defaultValue="byka@newtree.ru" required
                               maxLength="30" minLength="2" /> </form>
                 {/*   <div className="auth__form-login-input-email">pochta@newtree.ru</div>*/}
                </div>


                <div className="profile__email-email  profile__email-password">

                    <label className="profile__email ">Пароль</label>
                    {/*input*/}
                    <form name="profile__input-password">
                        <input type = 'text' className="auth__form-login-input-password" name="password" defaultValue="qwerty" required
                               maxLength="8" minLength="2"/> </form>
                </div>
                {/*auth__form-login-submit-button-enter для верного роута*/}
                {/*sign in*/}
                 <form action = "/movies" >
                <button className="auth__form-login-submit-button auth__form-login-submit-button-enter"
                        type="submit">Войти
                </button>
                 </form>

                {/*для верного роута  auth__login-signup-Do_Register-enter*/}
                <div className="auth__login-signup-container">

                    {/*sign-up*/}
                    <a href = "/sign-up" className="auth__login-signup-nonDecoration">
                    <div className="auth__login-signup-Do_Register auth__signup-link auth__login-signup-Do_Register-enter ">
                        Еще не зарегистрированы?
                    </div></a>
                    {/*для верного роута  auth__login-signup-Do_Register-enter*/}
                    <a href = "/sign-up" className="auth__login-signup-nonDecoration">
                    <p className="auth__login-signup-Do_Register auth__signup-link auth__signup-link-color auth__login-signup-Do_Register-enter">Регистрация
                    </p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Login;