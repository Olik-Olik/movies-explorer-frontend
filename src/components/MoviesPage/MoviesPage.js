import React, {useEffect, useState} from "react";
/*import MoviesPages from "./MoviesPages/MoviesPages";*/
import ResultMainMore from "./ResultMainMore/ResultMainMore";
import ResultMainSearch from "./ResultMainSearch/ResultMainSearch";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import '../../index.css';
import HeaderSavedFilms from "./HeaderSavedFilms/HeaderSavedFilms";
import apiMovies from "./../../utils/MoviesApi";
import Footer from "../Footer";


function MoviesPages(props) {
    const [isLoading, setLoading] = useState(true);
    const [loadedCards, setLoadedCards] = useState([]);

    /*отображение всех карт*/
    useEffect(() => {
        apiMovies.getAllAboutMovies()
            .then((res) => {
                console.log('Киношки загрузились корректно!');
                setLoadedCards(res);
                setLoading(false);
            })
            .catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
    }, []);


/*
    useEffect(() => {
        const loading = () => {
            console.log('Cards Loaded!')

        }
        window.addEventListener("load", loading)
    }, [])
*/

    let _doSearch = false;
    let _keyWord = '';
    let _shortMeter = false;

    function setSearchCriteria(keyWord, shortMeter){
        console.log('sSC');
        _doSearch = true;
        _keyWord = keyWord;
        _shortMeter = shortMeter;
    }

    function getSearchCriteria(){
        console.log('gSC');
        return {doSearch: _doSearch, keyWord: _keyWord, shortMeter: _shortMeter};
    }

    return (
        <>
            {console.log('MP: ' + loadedCards)}
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
