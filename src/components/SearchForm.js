/*

import React, {useState} from "react";
import Checkbox from "./Checkbox/Checkbox";
import ResultMainSearch from "./MoviesPage/ResultMainSearch/ResultMainSearch";

function SearchForm(props) {

    const [keyWord, setKeyWord] = useState('');
    const [shortMeter, setShortMeter] = useState(false);

    function handleSearchField(evt) {
        evt.preventDefault();
        console.log('KW: ' + evt.target.value);
        setKeyWord(evt.target.value)
    }

    function handleCheckbox(evt) {
        evt.preventDefault();
        console.log('SM: ' + evt.target.checked);
        setShortMeter(evt.target.checked);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log('SSC');
        props.setSearchCriteria(keyWord, shortMeter);
    }

    return (
        <>
            <ResultMainSearch>
                <form className="result_main_search" onSubmit={handleSubmit}>

                    <div className="result_main_search__conteiner">
                        <div className="lupa-film">
                            <div className="result_main_search_icon"/>
                            <div className="result_main_search_icon__lupa"/>
                            <form name="form__input_film">
                                <input type='text'
                                       className="result_main_search_icon_film"
                                       name="search"
                                       value={keyWord}
                                       onChange={handleSearchField}
                                       placeholder='Кино'
                                       required
                                       maxLength="40"
                                       minLength="2"/>
                            </form>
                        </div>
                        <div className="correct">
                            <button className="result_main_search__button_find" type="button"/>

                            <div className="find-line-icon">
                                <div className="result_main_search_icon_line">
                                </div>

                                <div className="icon-shortfilm">
                                    <div className="result_main_search_icon_smalltube decktop ">
                                        <Checkbox handleCheckbox={handleCheckbox}/>
                                    </div>
                                    <div className="result_main_search_icon_shortfilm decktop ">Короткометражки</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon-shortfilm mobile">
                        <div className="result_main_search_icon_smalltube mobile">
                            <Checkbox handleCheckbox={handleCheckbox}/>
                        </div>
                        <div className="result_main_search_icon_shortfilm mobile">Короткометражки</div>
                    </div>
                </form>
            </ResultMainSearch>

        </>
    )

}

export default SearchForm;
*/

