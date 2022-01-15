import React, {useState} from 'react';
import './ResultMainMore.css';
import '../ResultMainSearch/ResultMainSearch.css';
import '../../../index.css';
import   "../MoviesCardList/MoviesCardList";


function ResultMainMore(props){

    return(
        <form className="result_main_search result_main_more" >

            <div className="result_main_search__conteiner result_search_main_container_more" onClick={props.handleMoreClick}>

                    <button
                        type="button"
                        className= "result_main_search_icon_film"
                        >Ещё
                    </button>
            </div>
        </form>
    )
}
export default ResultMainMore;