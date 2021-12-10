import React from "react";
//import MoviesPages from "./MoviesPages/MoviesPages";
import ResultMainMore from "./ResultMainMore/ResultMainMore";
import Card from "./Card/Card";
import ResultMainSearch from "./ResultMainSearch/ResultMainSearch";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import '../../index.css';

import Footer from "../Footer";
import Header from "../Header";


function MoviesPages(props){
    return (
        <>
            <ResultMainMore/>
            <ResultMainSearch/>
            <Card/>
            <MoviesCardList/>
        </>
    )}
export default MoviesPages;