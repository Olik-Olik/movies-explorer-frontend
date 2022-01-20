import React, {useEffect, useState} from "react";
import ResultMainSearch from "./ResultMainSearch/ResultMainSearch";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import '../../index.css';
import HeaderSavedFilms from "./HeaderSavedFilms/HeaderSavedFilms";
import apiMovies from "./../../utils/MoviesApi";
import Footer from "../Footer";
import apiAuth from "../../utils/MainApi";
import {urlAllFilm} from "../../utils/constants";
import Preloader from "../Preloader";
import  { Suspense } from "react";

function MoviesPages(props) {
    const [isLoading, setLoading] = useState(true);
    const [loadedCards, setLoadedCards] = useState([]);
    const [searchCriteriaData, setSearchCriteriaData] = useState({
        doSearch: false,
        keyWord: '',
        shortMeter: false});

    function getMovies(){
        apiMovies.getAllAboutMovies()
            .then((cards) => {
                console.log('Киношки загрузились корректно!');
                apiAuth.getSaveMovies()
                    .then((savedMovies)=> {
                        console.log('Лайки загрузились корректно!');
                        cards.forEach((card) => {
                            card.imageURL = urlAllFilm + card.image.url;
                            card.isLiked = !!savedMovies.some((liked) => {
                                return card.id === liked.movieId;
                            });
                        })
                        setLoadedCards(cards);
                        setLoading(false);
                    } )
            }).catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
    }
    /*отображение всех карт*/
    useEffect(() => {
        setTimeout(getMovies,500);
    }, []);


    function setSearchCriteria(keyWord, shortMeter){
        console.log('keyWord' ,keyWord,  'shortMeter',shortMeter );
        setSearchCriteriaData(
            { doSearch: true,
                    keyWord: keyWord,
                    shortMeter: shortMeter})
    }

    function getSearchCriteria(){
        console.log("getsearchCriteria",searchCriteriaData);
        return searchCriteriaData;
    }



    return (
        <>
            <HeaderSavedFilms />
            <main>

                <ResultMainSearch

                    setSearchCriteria={setSearchCriteria}/>


          {/*      <Suspense fallback={<Preloader/>}>*/}
                {isLoading ? <Preloader/> : <MoviesCardList
                    getSearchCriteria={getSearchCriteria}
                    searchCriteria={getSearchCriteria()}
                    loadedCards={loadedCards} /*все карты извне*/
                />}
        {/*        </Suspense>*/}
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPages;
