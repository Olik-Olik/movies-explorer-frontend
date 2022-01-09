import React, {useEffect, useState} from "react";
import ResultMainSearch from "../MoviesPage/ResultMainSearch/ResultMainSearch";
import MoviesCardList from "../MoviesPage/MoviesCardList/MoviesCardList";
import '../../index.css';
import HeaderSavedFilms from "../MoviesPage/HeaderSavedFilms/HeaderSavedFilms";
import Footer from "../Footer";
import apiAuth from "../../utils/MainApi";

function SavedMoviesPages(props) {
    /* дублироание кода! в константы! */
    const urlAllFilm = 'https://api.nomoreparties.co';

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
        console.log('Effect searchCriteriaData: ' + searchCriteriaData.toString());
        setLoadedCards(loadedCards);
    }, [searchCriteriaData])

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

export default SavedMoviesPages;