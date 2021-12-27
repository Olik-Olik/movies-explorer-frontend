import React from 'react';
import './ResultMainMore.css';
import '../ResultMainSearch/ResultMainSearch.css';

import '../../../index.css';

function ResultMainMore(props){
    return(
        <form className="result_main_search result_main_more" >

            <div className="result_main_search__conteiner result_search_main_container_more">

                    <button
                        type="button"
                        className= "result_main_search_icon_film"
                        onClick={props.handleMoreClick}>Ещё</button>

            </div>
        </form>

    )
}
export default ResultMainMore;