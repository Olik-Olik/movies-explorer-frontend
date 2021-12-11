import React from "react";
import {Redirect, Route, BrowserRouter, Switch, useHistory} from "react-router-dom";
import CurrentUserContext from "../src/utils/context/CurrentUserContext";
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import NotFound_404 from "./components/NotFoundError/NotFound_404";
import SavedMoviesPages from "./components/SavedMoviesPage/SavedMoviesPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
import SignInHeader from "./components/SignInPage/SignInHeader";
import HeaderSavedFilms from "./components/ProfilePage/HeaderSavedFilms";

export default function App(props) {
    //const history = useHistory(); /////
    return (<BrowserRouter>
        <CurrentUserContext.Provider>
            <>
            <Route exact={true} path="/"
                    component={AboutPage}/>

            <Route exact={true} path="/sign-in"
                   component={SignInPage}/>

            <Route exact={true} path="/sign-up"
                component={SignUpPage}/>

            <Route exact={true} path="/"
                       component={AboutPage}/>

            <Route exact={true}  path="/movies"
                  component={MoviesPage}/>

            <Route exact={true}  path="/saved-movies"
                       component={SavedMoviesPages}/>

            <Route exact={true}  path="/profile"
                       component={ProfilePage}/>


            </>
        <Footer/>
    </CurrentUserContext.Provider>
</BrowserRouter>)

     {/*
        <NotFound_404/>

        */}}



