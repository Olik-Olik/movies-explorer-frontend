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
                    {/*input*/}
                    <label className= "label__input profile-name">Имя</label>
                 {/*   <div className="profile__name">Имя</div>*/}

                    <form name="form__input_name">
                    <input type = 'text' className="profile__input-name" name="name" value="Василий Иванович " required
                           maxLength="30" minLength="2" />
                </form>

                </div>
                <div className="profile__email-email ">
                    <label className= "label__input profile__email">E-mail</label>
                   {/* <div className="profile__email ">E-mail</div>*/}
                    {/*input*/}

                    <form name="profile__input-name">

                    <input type = 'text' className="auth__form-login-input-email" name="email" value="pochta@newtree.ru" required
                           maxLength="30" minLength="2" /> </form>

                      {/*  <div className="auth__form-login-input-email">pochta@newtree.ru</div>*/}

                </div>
                <div className="profile__email-email  profile__email-password">

                    <label className="profile__email">Пароль</label>

                    <form name="profile__input-password">

                    <input  type = 'text' name= "password" className="auth__form-login-input-password" value="qwerty" required
                            maxLength="8" minLength="2" /> </form>
                    {/*input*/}
                   {/* <div className="auth__form-login-input-password">pochta@newtree.ru</div>*/}


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