import React from 'react';
import '../Result_Main/Movies.css';
import '../Result_Main/Card.css';
import lupa from '../../images/icon__lupa.svg';
import smalltumb from '../../images/smalltumb.svg';
import find from '../../images/find.svg';
import line_between_find from '../../images/line_between_find.svg';

import '../../index.css';

function Movies(props){
    return(
        <form className="result_main_search" /*onChange={handleFormChange}*/>
            <div className="result_main_search__conteiner">
                <div className= "result_main_search_icon">
                    <div className= "result_main_search_icon__lupa"> </div>
                    <div className= "result_main_search_icon_film">Фильм</div>
                </div>
                {/*Найти*/}
                <button className="result_main_search__button_find"> </button>
                {/*Линия между смоллтубом и Найти*/}
                <div className= "result_main_search_icon_line">
                </div>
                {/*Смоллтуб*/}
                <div className= "result_main_search_icon_smalltube"> </div>
                <div className= "result_main_search_icon_shortfilm">Короткометражки</div>
            </div>
        </form>

    )
}
export default Movies;