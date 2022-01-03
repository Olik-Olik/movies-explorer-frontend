import React, {useState} from "react";
import Checkbox from "./Checkbox/Checkbox";
import ResultMainSearch from "./MoviesPage/ResultMainSearch/ResultMainSearch";

function SearchForm(props) {

    const [keyWord, setKeyWord] = useState(''); /*изначально нет кино */
    /*const [messageError, setMessageError] = useState('');*/
    const [shortMeter, setShortMeter] = useState(false);

/*ставит ключевое слово для поиска*/
    function handleSearchField(evt) {
        evt.preventDefault();
        setKeyWord(evt.target.value)
    }

    /*нужно передавать состояние чек/не чек от тумблера*/
    function handleCheckbox(evt) {
        evt.preventDefault();
        setShortMeter(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
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

                            <button className="result_main_search__button_find"
                                    /*onClick={handleSubmit}*/
                                    type="submit"
                            />

                            <div className="find-line-icon">
                                <div className="result_main_search_icon_line">
                                </div>

                                {/*Смоллтуб*/}
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
