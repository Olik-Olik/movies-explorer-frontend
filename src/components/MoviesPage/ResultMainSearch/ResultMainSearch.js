import React from 'react';
import './ResultMainSearch.css';
import lupa from '../../../images/icon__lupa.svg';
import smalltumb from '../../../images/smalltumb.svg';
import find from '../../../images/find.svg';
import line_between_find from '../../../images/line_between_find.svg';

import '../../../index.css';

function ResultMainSearch(props){
    return(
        <form className="result_main_search" /*onChange={handleFormChange}*/>

            <div className="result_main_search__conteiner">
           {/* <input className="result_main_search__value" placeholder="Название фильма" onChange={handleFormChange}={'обработчик ввода значения фильма'} value={movie} />
            */}
                {/*Лупа с Названием "ФИльм"*/}
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
export default ResultMainSearch;