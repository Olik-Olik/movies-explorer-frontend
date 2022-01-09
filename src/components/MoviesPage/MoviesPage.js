import React, {useContext, useEffect, useState} from "react";
/*import MoviesPages from "./MoviesPages/MoviesPages";*/
import ResultMainMore from "./ResultMainMore/ResultMainMore";
import ResultMainSearch from "./ResultMainSearch/ResultMainSearch";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import '../../index.css';
import HeaderSavedFilms from "./HeaderSavedFilms/HeaderSavedFilms";
import apiMovies from "./../../utils/MoviesApi";
import Footer from "../Footer";
import {CurrentUserContext} from "../../utils/context/CurrentUserContext";
import apiAuth from "../../utils/MainApi";


function MoviesPages(props) {
    /* дублироание кода! в константы! */
    const urlAllFilm = 'https://api.nomoreparties.co';
    const [isLoading, setLoading] = useState(true);
    const [loadedCards, setLoadedCards] = useState([]);
    const [searchCriteriaData, setSearchCriteriaData] = useState({ doSearch: false,
        keyWord: '',
        shortMeter: false});

    /*отображение всех карт*/
    useEffect(() => {
        apiMovies.getAllAboutMovies()
            .then((cards) => {
                console.log('Киношки загрузились корректно!');
                apiAuth.getSaveMovies()
                    .then((savedMovies)=> {
                        console.log('Лайки загрузились корректно!');
                        cards.forEach((card) => {
                            card.imageURL = urlAllFilm + card.image.url;
                            card.isLiked = !!savedMovies.some((liked) => {
/*                                console.log('CardID: ' + card.id);*/
                                return card.id === liked.movieId;
                            });
                        })
                        setLoadedCards(cards);
                        setLoading(false);
                    } )
            })
            .catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
    }, []);

    useEffect(() => {
        console.log('Effect searchCriteriaData: ' + searchCriteriaData.toString());
        setLoadedCards(loadedCards);
    }, [searchCriteriaData])


    function setSearchCriteria(keyWord, shortMeter){
        console.log('setSearchCriteria MP');
        setSearchCriteriaData(
            { doSearch: true,
                    keyWord: keyWord,
                    shortMeter: shortMeter})
    }

    function getSearchCriteria(){
        console.log('getSearchCriteria');
        return searchCriteriaData;
    }

    return (
        <>
            <HeaderSavedFilms/>
            <main>
                <ResultMainSearch setSearchCriteria={setSearchCriteria}/>
                {!isLoading && <MoviesCardList
                    getSearchCriteria={getSearchCriteria}
                    searchCriteria={getSearchCriteria()}
                    loadedCards={loadedCards} /*все карты извне*/
                />}
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPages;
