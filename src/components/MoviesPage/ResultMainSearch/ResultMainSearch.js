import React from 'react';
import './ResultMainSearch.css';
import '../../../index.css';
import Checkbox from "../../Checkbox/Checkbox";

function ResultMainSearch(props) {
    return (
        <form className="result_main_search" /*onChange={handleFormChange}*/>

            <div className="result_main_search__conteiner">
                <div className="lupa-film">
                    <div className="result_main_search_icon"></div>
                    <div className="result_main_search_icon__lupa"></div>
                    <form name="form__input_film">
                        <input type='text' className="result_main_search_icon_film" name="name"
                               defaultValue="Констатация фактов" required
                               maxLength="60" minLength="2"/>
                    </form>
                </div>
                {/*    <div className= "result_main_search_icon_film">Фильм</div>*/}

                <div className="correct">
                {/*Найти*/}
                <button className="result_main_search__button_find"></button>
                {/*Линия между смоллтубом и Найти*/}


                <div className="find-line-icon">
                    <div className="result_main_search_icon_line">
                    </div>

                    {/*Смоллтуб*/}
                    <div className="icon-shortfilm">
                        {/*  <div className= "result_main_search_icon_smalltube"> </div>*/}
                       {/* <div className="result_main_search_icon_smalltube"> </div>*/}
                        <div className="result_main_search_icon_smalltube decktop "><Checkbox/> </div>
                        <div className="result_main_search_icon_shortfilm decktop ">Короткометражки</div>
                    </div>
                </div>
                </div>
            </div>

<div className="icon-shortfilm mobile">
    <div className="result_main_search_icon_smalltube mobile"><Checkbox/> </div>
    <div className="result_main_search_icon_shortfilm mobile">Короткометражки</div>
</div>
        </form>
    )
}

export default ResultMainSearch;