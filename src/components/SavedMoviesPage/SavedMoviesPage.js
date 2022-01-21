import React, {useEffect, useState} from "react";
import ResultMainSearch from "../MoviesPage/ResultMainSearch/ResultMainSearch";
import MoviesCardList from "../MoviesPage/MoviesCardList/MoviesCardList";
import  '../../components/SavedMoviesPage/SavedMoviesPage.css';
import '../../index.css';
import HeaderSavedFilms from "../MoviesPage/HeaderSavedFilms/HeaderSavedFilms";
import Footer from "../Footer";
import apiAuth from "../../utils/MainApi";
import {urlAllFilm} from "../../utils/constants";
import Checkbox from "../Checkbox/Checkbox";
import "../../components/SavedMoviesPage/SavedMoviesPage.css"
import ButtonKnowMore from "../AboutPage/ButtonKnowMore/ButtonKnowMore";
import Preloader from "../Preloader";
import  { Suspense } from "react";

function SavedMoviesPages(props) {

    const [isLoading, setLoading] = useState(true);
    const [loadedCards, setLoadedCards] = useState([]);

    const [searchCriteriaData, setSearchCriteriaData] = useState({
        doSearch: false,
        keyWord: '',
        shortMeter: false
    });


    function setSearchCriteria(keyWord, shortMeter) {
        console.log('setSearchCriteria SMP');
        setSearchCriteriaData(
            {
                doSearch: true,
                keyWord: keyWord,
                shortMeter: shortMeter
            })
    }

    function getSearchCriteria() {
        console.log('getSearchCriteria');
        return searchCriteriaData;
    }

    /*отображение всех лайкнутых карт*/
    useEffect(() => {
        apiAuth.getSaveMovies()
            .then((savedMovies) => {
                console.log('Лайки загрузились корректно!');
                savedMovies.forEach((card) => {
                    card.imageURL = card.thumbnail;
                    card.isLiked = true;
                });
                setLoadedCards(savedMovies);
                setLoading(false);
            })
            .catch((err) => console.log('Лайканые киношки не загрузились!: ' + err.toString()))
    }, []);


    useEffect(() => {
        setLoadedCards(loadedCards);
    }, [searchCriteriaData])

    return (
        <>
            <HeaderSavedFilms handleSignOut={props.handleSignOut}/>
            <main>
                <ResultMainSearch setSearchCriteria={setSearchCriteria}/>

                { isLoading ? <Preloader/>:
                     <MoviesCardList
                      getSearchCriteria={getSearchCriteria}
                      searchCriteria={getSearchCriteria()}
                      loadedCards={loadedCards}
                      handleDelete={props.handleDelete}
                      info={props.info}
                    />
                 }

            </main>
            <Footer/>
        </>
    )
}
export default SavedMoviesPages;
