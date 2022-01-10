import React, {useEffect, useState} from "react";
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
import apiMovies from "./utils/MoviesApi";
import ProtectedRoute from "./components/ProtectedRoute";
import {CurrentUserContext} from './utils/context/CurrentUserContext';

export default function App(props) {
    /*####*/ //  let currentUserContext = useContext(CurrentUserContext);
    const [currentUser, setCurrentUser] = useState({});//Стейт переменная используется  /*####*/
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [cards, setCards] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [infoSuccess, setInfoSuccess] = useState(false);
    const [info, setInfo] = useState('');
    const [movies, setMovies] = useState('');
    //   const [search, setSearch] = useState({});
    const [isRegResOpen, setIsRegResOpen] = useState(false);

    const checkToken = () => {
        setTimeout(()=> {
            setLoggedIn(true);
            setIsLoading(false);},1500);
    }
        /*const token = localStorage.getItem('token');
        if (token) {
            apiAuth.checkToken(token)
                .then(() => {
                    setIsLoading(true);
                    setLoggedIn(true);
                }).catch((err) => {
                console.log('не залогинились не подгрузились!!!: ' + err.toString())
            })
        }
    }*/

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
                    /*####*/   //    currentUserContext = false;
                    setLoggedIn(false);
                    setIsLoading(false);
                    setEmail('');
                })

        } else {
            console.log('Токена нету!!!');
            /*####*/      //  currentUserContext = false;
            setLoggedIn(false);
            setIsLoading(false);
            setEmail('');
            //  setName('');
        }
    }

    /*
        useEffect(() => {
            apiAuth.checkToken().then(() => {
                currentUserContext = true;
                setLoggedIn(true)
            }).catch( (err) => {
                currentUserContext = false;
                setLoggedIn(false);
            })
        },[])
    */
    useEffect(() => {
        hukUseEffectToken();
    }, []);

    /*
        useEffect(() => {
            hukUseEffectToken();
        }, [loggedIn, currentUserContext]);

    */


    function handleLogin(email, password) {
        return apiAuth
            .login(email, password)
            .then((res) => {
                console.log('login');
                console.log(res.token);
                localStorage.setItem('token', res.token);
                /* apiAuth.checkToken(res.token);*/
                apiAuth.handleToken(res.token); /*##########*/
                setEmail(email);
                /*######*/ //          currentUserContext = true;
                setLoggedIn(true);
                console.log('Залогинились !');
                setInfo('Залогинились !');
                 return res;
              //  return loggedIn; /*#####*/

            })
            .catch((err) => {
                if (err.status === 401 ){setInfo('указанные имя пользователя и пароль не верны')}
                else
                {setInfo('Не залогинились !');}
                console.log('Не залогинились :( ' + err.toString());
                /*######*/      //      currentUserContext = false;
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
                handleLogin(email, password); /*######*/
                setCurrentUser(res); /*######*/
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
        apiAuth.updateProfile({
            'name': userData.name,
            'email': userData.email,
            'password': userData.password,
        })
            .then(res => {
                setCurrentUser(res); /*######*/
                closeAllPopups()
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
        //setLoggedIn(false);
        // history.push("/");
    }


//out off
    function handleSignOut() {
        console.log("logout");
        localStorage.removeItem('token');
        /*######*/  //  setCurrentUser({});
        /*######*/ //  currentUserContext = false;
        // /*######*/ //      setEmail("");
        setLoggedIn(false);
        // history.push("/");
    }

    /*  checkBoxShortMovies* тумблер в чекбоксе/*/
/*
    const [checkBoxShortMovies, setCheckBoxShortMovies] = useState(false);

    function handleCheckBoxShortMovies() {
        setCheckBoxShortMovies(checkBoxShortMovies);
    }
*/

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
                                   component={() => (<SignUpPage handleRegister={handleRegister}/>)}
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
                                handleUpdateProfile={handleUpdateProfile}
                            />
                            <Route path=''>
                                <NotFound_404/>
                            </Route>

                        </Switch>
                    }

                    {/*    <MenuPopup isOpen={props.isOpen} onClose={props.onClose} />*/}
                </CurrentUserContext.Provider>
            </BrowserRouter>
        </>
    )
}

