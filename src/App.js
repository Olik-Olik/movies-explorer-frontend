import React, {useEffect, useState} from "react";
import {BrowserRouter, Redirect, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import CurrentUserContext from "../src/utils/context/CurrentUserContext";
import './index.css';
import AboutPage from "./components/AboutPage/AboutPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import NotFound_404 from "./components/NotFoundError/NotFound_404";
import SavedMoviesPages from "./components/SavedMoviesPage/SavedMoviesPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
/*import SignInHeader from "./components/SignInPage/SignInHeader";
import HeaderSavedFilms from "./components/ProfilePage/HeaderSavedFilms";
import Checkbox from "./components/Checkbox/Checkbox";*/
import apiMovies from "./utils/MoviesApi";
import apiAuth from "./utils/MainApi";
import ProtectedRoute from "./components/ProtectedRoute";
import MenuPopup from "./components/MenuPopup/MenuPopup";
import * as path from "path";
import MainApi from "./utils/MainApi";

export default function App(props) {
    const history = useHistory();
 //   const location = useLocation();
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [cards, setCards] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [infoSuccess, setInfoSuccess] = useState(false);
    const [search, setSearch] = useState({});
    const [isRegResOpen, setIsRegResOpen] = useState(false);
    const [korotkometrazh, setKorotkometrazh] = useState(false);


    /*function hukUseEffectToken() {
        // если у пользователя есть токен в localStorage,
        // эта функция проверит валидность токена
        const token = localStorage.getItem('token');
      //  const path = location.pathname;
        if (token) {
           // console.log("токен есть JWT");
            // проверим токен в локалсторадж
            apiAuth.checkToken(token)
                // здесь можем получить данные пользователя!
                // поместим их в стейт внутри App.js
                .then((res) => {
                    console.log('Ответ есть!');
                    setLoggedIn(true);
                    setEmail(res.email);
                    setName(res.name);
                    setIsLoading(false);
                  //   history.push(path);
                })
                .catch((err) => {
                    console.log('Ответа нет! ' + err.toString());
                    setLoggedIn(false);
                    setIsLoading(false);
                    setEmail('');
                    setName('');
                   // history.push('/');
                })

        } else {
            console.log('Токена нету!!!');
            setLoggedIn(false);
            setIsLoading(false);
            setEmail('');
            setName('');
        }
    }
*/

    function hukUseEffectToken() {

        const token = localStorage.getItem("token");
        if (token) {
            apiAuth.checkToken(token)

                // здесь можем получить данные пользователя!
                // поместим их в стейт внутри App.js
                .then((res) => {
                    console.log('Ответ есть!');
                    setLoggedIn(true);
                    setCurrentUser(res);
                   // history.push(path);
                    setEmail(res.email);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log('Ответа нет! ' + err.toString());
                    setLoggedIn(false);
                    setIsLoading(false);
                     setEmail('');
                  //  setName('');
                 //  history.push("/");
                })

        } else {
            console.log('Токена нету!!!');
            setLoggedIn(false);
            setIsLoading(false);
            setEmail('');
          //  setName('');
        }
    }


/*
                    useEffect(() => {
                        hukUseEffectToken();
                    }, [loggedIn]);
*/


//movies
    useEffect(() => {
        if (loggedIn) {
            apiMovies.getAllAboutMovies()
                .then((res) => {
                    console.log(res);
                    setCards(res)
                })
                .catch((err) => console.log('Кина не будет!: ' + err.toString()))
        }
    }, [loggedIn]);

    function handleLogin(email, password ) {
        return apiAuth
            .login(email, password )
            .then((res) => {
                console.log('login');
                localStorage.setItem('token', res.token);
               /* apiAuth.checkToken(res.token);*/
                apiAuth.handleToken(res.token); /*##########*/
                setEmail(email);
                setLoggedIn(true);
              //  history.push("/movies");
                console.log('Залогинились !');
            })
            .catch((err) => {
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
                console.log("register");
                //handleLogin({name, email, password});
                setCurrentUser(res);
            })
            .catch((err) => {
                    console.log('Не зарегались :( ' + err.toString());
                    setInfoSuccess(false);
                    console.log(`БЕЕЕ register ${err}`)
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
            .then(data => {
                setCurrentUser(data);
                closeAllPopups()
            })
            .catch((err) => {
                console.log('username не  получен!!!: ' + err.toString())
            })
    }


    /*    //profile
        const handleEditProfileOpen = (evt) => {
            console.log("I'm a superstar 2!!!")
            handleEditProfileClick(evt)
        }*/

    /*    function handleCardClick(card) {
            console.log("I'm a walrus 4!!!")
            setSelectedCard(card);
            setIsImagePopupOpen(true);
        }*/

    function closeAllPopups() {
        console.log("I was so close...")
        setIsEditProfilePopupOpen(false);
        setIsRegResOpen(false);
        setLoggedIn(false);
        // history.push("/");
    }

    /*function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i === currentUser._id);
        if (isLiked) {
            // Отправляем запрос в API и получаем обновлённые данные карточки
            apiMovies.card__container_like_passive(card._id)
                .then((newCard) => {
                    setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log('MAMA!!! DisLike: ' + err.toString())
                })

        } else {
            apiMovies.card__container_like_active(card._id)
                .then((newCard) => {
                    setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log('MAMA!!! Like: ' + err.toString())
                })
        }
    }
*/

    /*    /!* удаление из сохраненного*!/
        function handleDelete(data) {
            apiAuth.deleteMovie(data.id)
                .then(() => {
                })
                .catch((err) => {
                    console.log('Удаление:' + err.toString());
                })*/



//out off
    function handleSignOut() {
        console.log("logout");
        localStorage.removeItem('token');
        setCurrentUser({});
        setEmail("");
        setLoggedIn(false);
        // history.push("/");
    }


    return (<BrowserRouter /*history={history}*/>
        <CurrentUserContext.Provider>
            <>
                {!isLoading &&
                    <Switch>
                       {/* <Route>
                            {() => loggedIn === true ? <Redirect to="/movies"/> : <Redirect to="/sign-in"/>}
                        </Route>
*/}

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
                            component={MoviesPage}
                            exact={true} path="/movies" loggedIn={loggedIn}
                        />

                        <ProtectedRoute
                            exact={true} path="/saved-movies"
                            component={() => (<SavedMoviesPages
                                loggedIn={loggedIn}
                                signOut={handleSignOut}/>)}
                        />

                        <ProtectedRoute
                            exact={true} path="/profile"
                            component={() => (<ProfilePage
                                loggedIn={loggedIn}
                                signOut={handleSignOut}
                                updateProfile={handleUpdateProfile}
                            />)}
                        />
                        <Route path=''>
                            <NotFound_404/>
                        </Route>

                    </Switch>
                }
            </>
                {/*    <MenuPopup isOpen={props.isOpen} onClose={props.onClose} />*/}
                    </CurrentUserContext.Provider>
    </BrowserRouter>
    )}

