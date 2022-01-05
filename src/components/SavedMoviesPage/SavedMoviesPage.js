import React, {useState} from "react";

//import MoviesPages from "./MoviesPages/MoviesPages";
/*import ResultMainMore from "../MoviesPage/ResultMainMore/ResultMainMore";
import MovieCard from "../MoviesPage/MovieCard/MovieCard";*/
import ResultMainSearch from "../MoviesPage/ResultMainSearch/ResultMainSearch";
import MoviesCardList from "../MoviesPage/MoviesCardList/MoviesCardList";
import '../../index.css';
import HeaderSavedFilms from "../MoviesPage/HeaderSavedFilms/HeaderSavedFilms";
import Footer from "../Footer";
import Preloader from "../Preloader";
// import SearchForm from "../SearchForm";
/*import Header from "../Header";*/


function SavedMoviesPages(props){
    const [loadedCards, setLoadedCards] = useState([]);

    return (
        <>
            <HeaderSavedFilms/>
          <main>
            <ResultMainSearch/>
         {/*   <SearchForm/>*/}
            <MoviesCardList/>
          </main>
            <Footer/>
        </>
    )}
export default SavedMoviesPages;