import React, {useEffect, useState} from "react";
/*import MoviesPages from "./MoviesPages/MoviesPages";*/
import ResultMainMore from "./ResultMainMore/ResultMainMore";
import ResultMainSearch from "./ResultMainSearch/ResultMainSearch";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import '../../index.css';
import HeaderSavedFilms from "./HeaderSavedFilms/HeaderSavedFilms";
//import SearchForm from "../SearchForm";
import Footer from "../Footer";


function MoviesPages(props) {
    const [isLoading, setLoading] = useState(false);

    /*  useEffect(() => {
          console.log("Load finished!");
          //setLoading(false);
      }, [isLoading]);*/

    useEffect(() => {
        const loading = () => {
            setLoading(false);
        }
        window.addEventListener("load", loading)
    }, [])

    let _keyWord = '';
    let _shortMeter = false;

    function setSearchCriteria(keyWord, shortMeter){
        console.log('sSC');
        _keyWord = keyWord;
        _shortMeter = shortMeter;
    }

    function getSearchCriteria(){
        console.log('gSC');
        return {keyWord: _keyWord, shortMetter: _shortMeter};
    }

    return (
        <>
            <HeaderSavedFilms/>
            <main>
                <ResultMainSearch setSearchCriteria={setSearchCriteria}/>
                <MoviesCardList getSearchCriteria={getSearchCriteria}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPages;
