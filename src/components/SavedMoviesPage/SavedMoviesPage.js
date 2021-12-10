import React from "react";
//import MoviesPages from "./MoviesPages/MoviesPages";
import ResultMainMore from "../MoviesPage/ResultMainMore/ResultMainMore";
import Card from "../MoviesPage/Card/Card";
import ResultMainSearch from "../MoviesPage/ResultMainSearch/ResultMainSearch";
import MoviesCardList from "../MoviesPage/MoviesCardList/MoviesCardList";
import '../../index.css';

import Footer from "../Footer";
import Header from "../Header";


function SavedMoviesPages(props){
    return (
        <>
            <ResultMainSearch/>
            <Card/>
      {/*      <MoviesCardList/>*/}
            <ResultMainMore/>
            <Footer/>
        </>
    )}
export default SavedMoviesPages;