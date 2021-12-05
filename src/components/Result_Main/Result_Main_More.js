import React from 'react';
import '../Result_Main/Result_Main_More.css';
import '../Result_Main/Result_Main_Search.css';

import '../../index.css';

function Result_Main_More(props){
    return(
        <form className="result_main_search result_main_more" /*onChange={handleFormChange}*/>

            <div className="result_main_search__conteiner result_search_main_container_more">

                    <div className= "result_main_search_icon_film">Ещё</div>

            </div>
        </form>

    )
}
export default Result_Main_More;