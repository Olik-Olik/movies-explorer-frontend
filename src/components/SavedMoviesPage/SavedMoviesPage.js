import React, {useEffect, useState} from "react";
import ResultMainSearch from "../MoviesPage/ResultMainSearch/ResultMainSearch";
import MoviesCardList from "../MoviesPage/MoviesCardList/MoviesCardList";
import '../../index.css';
import HeaderSavedFilms from "../MoviesPage/HeaderSavedFilms/HeaderSavedFilms";
import Footer from "../Footer";
import apiMovies from "../../utils/MoviesApi";
import apiAuth from "../../utils/MainApi";

function SavedMoviesPages(props){
    /* дублироание кода! в константы! */
    const urlAllFilm = 'https://api.nomoreparties.co';

    const [isLoading, setLoading] = useState(true);
    const [loadedCards, setLoadedCards] = useState([]);

    let _doSearch = false;
    let _keyWord = '';
    let _shortMeter = false;

    function setSearchCriteria(keyWord, shortMeter){
        console.log('setSearchCriteria');
        _doSearch = true;
        _keyWord = keyWord;
        _shortMeter = shortMeter;
    }

    function getSearchCriteria(){
        console.log('getSearchCriteria');
        return {doSearch: _doSearch,
            keyWord: _keyWord,
            shortMeter: _shortMeter};
    }

    /*отображение всех лайкнутых карт*/
    useEffect(() => {
                apiAuth.getSaveMovies()
                    .then((savedMovies)=> {
                        console.log('Лайки загрузились корректно!');
                        savedMovies.forEach((card) => {
                            card.imageURL = urlAllFilm + card.image.url;
                            card.isLiked = true;
                            });
                        setLoadedCards(savedMovies);
                        setLoading(false);
                    } )
            .catch((err) => console.log('Лайканые киношки не загрузились!: ' + err.toString()))
    }, []);

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
    )}
export default SavedMoviesPages;