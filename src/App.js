import {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import './index.css';
import AboutPage from "./components/AboutPage/AboutPage";
import AboutPageAuth from "./components/AboutPage/AboutPageAuth";
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
    const [loggedIn, setLoggedIn] = useState(true);/*!!!!!!!!!!*/
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [infoSuccess, setInfoSuccess] = useState(false);


    const [info, setInfo] = useState('');
    const [isRegResOpen, setIsRegResOpen] = useState(false);
    const [active, setActive] = useState(false); /*Эта тема про активность формы*/

    const contextValue = {currentUser, setCurrentUser}

    const checkToken = () => {
        setTimeout(() => {
            /*
                        setLoggedIn(true);
            */
            setIsLoading(false);
        }, 3000);
    }

    function hukUseEffectToken() {
        checkToken();
        const token = localStorage.getItem("token");
        if (token) {
            apiAuth.checkToken()
                .then((res) => {
                    console.log('Ответ есть!');
                    setLoggedIn(true);
                    setCurrentUser(res);
                    setEmail(res.email);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log('Ответа нет! ' + err.toString());
                    setLoggedIn(false);
                    setIsLoading(false);
                    setEmail('');
                    localStorage.removeItem("token");
                    localStorage.removeItem(currentUser);

                })

        } else {
            console.log('Токена нету!!!');
            setLoggedIn(false);
            setIsLoading(false);
            setEmail('');

            localStorage.removeItem("token");
            localStorage.removeItem(currentUser);

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
                if (err.status === 401) {
                    setInfo('указанные имя пользователя и пароль не верны')
                } else {
                    setInfo('Не залогинились !');
                }
                console.log('Не залогинились :( ' + err.toString());
                setLoggedIn(false);
            })
    }

    console.log("LoggedIn", loggedIn)

    function handleRegister(name, email, password) {
        return apiAuth
            .register(name, email, password)
            .then(() => {

                    setInfoSuccess(true);
                    setIsRegResOpen(true);
                    console.log("зарегались");
                    setInfo('Зарегистрировались, Класс');
                    console.log(email + password);
                    //handleLogin(email, password);

                }
            )
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
                setInfo('Получилось изменить данные')
                setTimeout(() => {
                    setInfo('')
                }, 3000)
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
        localStorage.removeItem('movies')
        localStorage.removeItem("jwt");
        localStorage.removeItem("token");
        localStorage.removeItem("password");
        localStorage.clear();
        setIsEditProfilePopupOpen(false);
        setIsRegResOpen(false);
    }

    return (
        <>
            <BrowserRouter /*history={history}*/>
                <CurrentUserContext.Provider value={contextValue}>

                    {!isLoading &&
                        <Switch>

                            <Route exact={true}
                                   path="/"
                                   component={loggedIn ? AboutPageAuth : AboutPage}/>

                            {/*  {loggedIn ? <AboutPage> : <AboutPageAuth>}*/}

                             <ProtectedRoute
                                exact={true}
                                path="/auth"
                                component={AboutPageAuth}
                                loggedIn={loggedIn}/>

                            <Route exact={true}
                                   path="/sign-in"
                                   component={() => (!loggedIn ? <SignInPage
                                           handleLogin={handleLogin}
                                           info={info}/>
                                            : <MoviesPage/>)}
                                             />


                            <Route exact={true}
                                   path="/sign-up"
                                   component={() => (!loggedIn ? <SignUpPage handleRegister={handleRegister}
                                                                             handleLogin={handleLogin}
                                                                             info={info}/>
                                                                            : <MoviesPage/>)}
                                                                            />

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
                                handleSignOut={handleSignOut}
                                loggedIn={loggedIn}
                                info={info}
                            />

                            <ProtectedRoute
                                exact={true}
                                path="/profile"
                                component={ProfilePage}
                                loggedIn={loggedIn}
                                handleSignOut={handleSignOut}
                                infoSuccess={infoSuccess}
                                info={info}
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

