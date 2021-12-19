import React, {useState, useEffect} from "react";
import {Redirect, Route, BrowserRouter, Switch, Routes, useHistory} from 'react-router-dom';
import CurrentUserContext from "../src/utils/context/CurrentUserContext";
import './index.css';
/*import Header from "./components/Header";
import Footer from "./components/Footer";*/
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
//import apiAuth from "./utils/MainApi";



export default function App(props) {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setLoading] =useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isConfirmDeletePopup, setIsConfirmDeletePopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [cards, setCards] = useState([]);
    const [email, setEmail] = useState("");
    const [infoSuccess, setInfoSuccess] = useState(false);
    const [credential, setCredential] = useState({});
    const [isRegResOpen, setIsRegResOpen] = useState(false);

    function hukUseEffectToken() {

    }
   /* function hukUseEffectToken() {
        // если у пользователя есть токен в localStorage,
        // эта функция проверит валидность токена
        const token = localStorage.getItem('token');
        if (token) {
            console.log("токен есть JWT");
            // проверим токен в локалсторадж
            auth.checkToken(token)
                // здесь можем получить данные пользователя!
                // поместим их в стейт внутри App.js
                .then((res) => {
                    console.log('Ответ есть!');
                    setLoggedIn(true);
                    setEmail(res.email);
                    setIsLoading(false);
                    //history.push('/');
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
*/

    useEffect(() => {
        hukUseEffectToken();
    }, [loggedIn]);


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



//user
/*    useEffect(() => {
        if (loggedIn) {
            api.getUserInfo()
                .then(data => {
                    setCurrentUser(data);
                })
                .catch((err) => {
                        console.log('MAMA, Аватарчик не  получен!!!: ' + err.toString())
                    }
                )
        }
    }, [loggedIn]);*/


/*    function handleUpdateProfile(userData) {
        api.submitUserInfo({
            'name': userData.name,
            'about': userData.about
        })
            .then(data => {
                setCurrentUser(data);
                closeAllPopups()
            })
            .catch((err) => {
                console.log('MAMA, username не  получен!!!: ' + err.toString())
            })
    }*/

//like
   /* function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i === currentUser._id);
        if (isLiked) {
            // Отправляем запрос в API и получаем обновлённые данные карточки
            api.dislike(card._id)
                .then((newCard) => {
                    setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log('MAMA!!! DisLike: ' + err.toString())
                })

        } else {
            api.like(card._id)
                .then((newCard) => {
                    setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log('MAMA!!! Like: ' + err.toString())
                })
        }
    }
*/
//profile
/*
    function handleEditProfileClick(evt) {
        console.log("I'm a walrus 2!!!")
        setIsEditProfilePopupOpen(true);
    }
*/



/*    //profile
    const handleEditProfileOpen = (evt) => {
        console.log("I'm a superstar 2!!!")
        handleEditProfileClick(evt)
    }*/

    function handleCardClick(card) {
        console.log("I'm a walrus 4!!!")
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    function closeAllPopups() {
        console.log("I was so close...")
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
        setIsConfirmDeletePopup(false);
        setIsRegResOpen(false);

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

    /*function handleLogin(password, emmail) {
        return auth
            .login(password, emmail)
            .then((res) => {
                // console.log('vasa');
                localStorage.setItem('token', res.token);
                api.handleToken();
                setEmail(emmail);
                setLoggedIn(true);
                console.log('Залогинились 1!');
            })
            .catch((err) => {
                console.log('Не залогинились :( ' + err.toString());
                setLoggedIn(false);
            })
    }*/

    /*function handleRegister(password, email) {
        return auth
            .register(password, email)
            .then((res) => {
                setInfoSuccess(true);
                setIsRegResOpen(true);
                // history.push("/signin"); /////
                console.log("1");
            })
            .catch((err) => {
                    console.log('Не зарегались :( ' + err.toString());
                    setInfoSuccess(false);
                    console.log(`Вот такая ошибка вылезла ${err}`)
                    setIsRegResOpen(true);
                }
            )
    }*/

//out off
    function handleSignOut() {
        console.log("2 - logout");
        localStorage.removeItem('token');
        setCurrentUser({});
        setEmail("");
        setLoggedIn(false);
    }


    return (<BrowserRouter>
        <CurrentUserContext.Provider>
            <>
                {!isLoading &&
                <Switch>
                    {/*   <Routes>*/}
                    <Route exact={true} path="/"
                           component={AboutPage}/>

                    <Route exact={true} path="/sign-in"
                           component={SignInPage}/>

                    <Route exact={true} path="/sign-up"
                           component={SignUpPage}/>

                    <Route exact={true} path="/movies"
                           component={MoviesPage}/>

                    <Route exact={true} path="/saved-movies"
                           component={SavedMoviesPages}/>

                    <Route exact={true} path="/profile"
                           component={ProfilePage}/>


                    <Route path=''
                           component={NotFound_404}/>
                </Switch>
                }
                {/*   </Routes>*/}
            </>
            {/*    <Footer/>*/}

        </CurrentUserContext.Provider>
    </BrowserRouter>)
}

    /*
        import React, { useCallback } from "./react";
//хук управления формой
    export function useForm() {
        const [values, setValues] = React.useState({});
        const handleChange = (event) => {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            setValues({...values, [name]: value});
        };

        return {values, handleChange, setValues};
    }

//хук управления формой и валидации формы
    export function useFormWithValidation() {
        const [values, setValues] = React.useState({});
        const [errors, setErrors] = React.useState({});
        const [isValid, setIsValid] = React.useState(false);

        const handleChange = (event) => {
            const target = event.target;
            const name = target.name;
            const value = target.value;
            setValues({...values, [name]: value});
            setErrors({...errors, [name]: target.validationMessage });
            setIsValid(target.closest("form").checkValidity());
        };

        const resetForm = useCallback(
            (newValues = {}, newErrors = {}, newIsValid = false) => {
                setValues(newValues);
                setErrors(newErrors);
                setIsValid(newIsValid);
            },
            [setValues, setErrors, setIsValid]
        );

        return { values, handleChange, errors, isValid, resetForm };
    }
*/

    /*  //const history = useHistory(); /////*/
