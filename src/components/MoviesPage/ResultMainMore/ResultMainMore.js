import React from 'react';
import './ResultMainMore.css';
import '../ResultMainSearch/ResultMainSearch.css';

import '../../../index.css';

function ResultMainMore(props){
    return(
        <form className="result_main_search result_main_more" /*onChange={handleFormChange}*/>

            <div className="result_main_search__conteiner result_search_main_container_more">

                    <div className= "result_main_search_icon_film">Ещё</div>

            </div>
        </form>

    )
}
export default ResultMainMore;