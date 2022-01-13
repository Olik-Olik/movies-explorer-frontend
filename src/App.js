import  {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch, useHistory, Redirect} from 'react-router-dom';
import './index.css';
import AboutPage from "./components/AboutPage/AboutPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import NotFound_404 from "./components/NotFoundError/NotFound_404";
import SavedMoviesPages from "./components/SavedMoviesPage/SavedMoviesPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
import apiAuth from "./utils/MainApi";
import ProtectedRoute from "./components/ProtectedRoute";
import {CurrentUserContext} from './utils/context/CurrentUserContext';

export default function App(props) {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [infoSuccess, setInfoSuccess] = useState(false);
    const [info, setInfo] = useState('');
    const [isRegResOpen, setIsRegResOpen] = useState(false);

    const checkToken = () => {
        setTimeout(()=> {
            setLoggedIn(true);
            setIsLoading(false);},3000);
    }

    function hukUseEffectToken() {
        checkToken();
        const token = localStorage.getItem("token");
        if (token) {
            apiAuth.checkToken()
                .then((res) => {
                    console.log('Ответ есть!');
                    setLoggedIn(true);
                    setCurrentUser(currentUser);
                    setEmail(res.email);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log('Ответа нет! ' + err.toString());
                    setLoggedIn(false);
                    setIsLoading(false);
                    setEmail('');
                })

        } else {
            console.log('Токена нету!!!');
            setLoggedIn(false);
            setIsLoading(false);
            setEmail('');
        }
    }

    useEffect(() => {
        hukUseEffectToken();
    }, []);


    function handleLogin(email, password) {
        return apiAuth
            .login(email, password)
            .then((res) => {
                console.log('login');
                console.log(res.token);
                localStorage.setItem('token', res.token);
                apiAuth.handleToken(res.token);
                setEmail(email);
                setLoggedIn(true);
                console.log('Залогинились !');
                setInfo('Залогинились !');
                 return res;
            })
            .catch((err) => {
                if (err.status === 401 ){setInfo('указанные имя пользователя и пароль не верны')}
                else
                {setInfo('Не залогинились !');}
                console.log('Не залогинились :( ' + err.toString());
                setLoggedIn(false);
            })
    }

    function handleRegister(name, email, password) {
        return apiAuth
            .register(name, email, password)
            .then((res) => {
                setInfoSuccess(true);
                setIsRegResOpen(true);
                console.log("зарегались");
                setInfo('Зарегистрировались, Класс')
            })
            .catch((err) => {
                    console.log('Не зарегистрировались :( ' + err.toString());
                    setInfoSuccess(false);
                    setInfo('Не зарегистрировались')
                    console.log(`Не зарегались ${err}`)
                    setIsRegResOpen(true);
                }
            )
    }

    function handleUpdateProfile(userData) {
        console.log('UD: ' + userData.name);
        apiAuth.submitProfile(userData.name, userData.email/*, userData.password*/)
            .then(data => {
                setCurrentUser(data);
            })
            .catch((err) => {
                setInfo('Не получилось изменить данные')
                console.log('username не  получен!!!: ' + err.toString())
            })
    }


    function closeAllPopups() {
        console.log("I was so close...")
        setIsEditProfilePopupOpen(false);
        setIsRegResOpen(false);
    }

    function handleSignOut() {
        console.log("logout");
        localStorage.removeItem('token');
        setLoggedIn(false);
    }

    return (
        <>
            <BrowserRouter /*history={history}*/>
                <CurrentUserContext.Provider value={currentUser}>

                    {!isLoading &&
                        <Switch>

                            <Route exact={true} path="/"
                                   component={AboutPage}/>

                            <Route exact={true} path="/sign-in"
                                   component={() => (<SignInPage handleLogin={handleLogin}/>)}
                            />

                            <Route exact={true} path="/sign-up"
                                   component={() => (<SignUpPage handleRegister={handleRegister}
                                   info={info}/>)}
                            />
                            {/*регистрация */}

                            <ProtectedRoute
                                exact={true}
                                path="/movies"
                                component={MoviesPage}
                                loggedIn={loggedIn}
                            />

                            <ProtectedRoute
                                exact={true}
                                path="/saved-movies"
                                component={SavedMoviesPages}
                                signOut={handleSignOut}
                                loggedIn={loggedIn}
                            />

                            <ProtectedRoute
                                exact={true} path="/profile"
                                component={ProfilePage}
                                loggedIn={loggedIn}
                                signOut={handleSignOut}
                                infoSuccess={infoSuccess}
                                setInfo={setInfo}
                                handleUpdateProfile={handleUpdateProfile}


                            />
                            <Route path=''>
                                <NotFound_404/>
                            </Route>

                        </Switch>
                    }
                </CurrentUserContext.Provider>
            </BrowserRouter>
        </>
    )
}

