import './ResultMainSearch.css';
import '../../../index.css';
import Checkbox from "../../Checkbox/Checkbox";
import React, {useEffect, useState} from "react";
import '../../../components/SignUpPage/Register.css';
import {useRouteMatch} from "react-router-dom";

function ResultMainSearch(props) {

    const [keyWord, setKeyWord] = useState('');
    const [shortMeter, setShortMeter] = useState(false); /*true*/
    const [info, setInfo] = useState('');

    const isSavedFilmsPage = useRouteMatch({path: '/saved-movies', exact: true});

    function handleSearchField(evt) {
        evt.preventDefault();
        console.log('keyWord', evt.target.value);
        setKeyWord(evt.target.value);
    }

    function handleCheckbox(evt) {
        console.log('ShortFilm handleCheckbox: ' + evt.target.checked);
        setShortMeter(evt.target.checked);
        /*чекбокс короткометражки*/
        props.setSearchCriteria(keyWord, evt.target.checked);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log('handleSubmit');
        localStorage.setItem('keyWord', JSON.stringify((keyWord)));
        localStorage.setItem('shortMeter', (shortMeter));

        props.setSearchCriteria(keyWord, shortMeter);
        console.log('keyWord', keyWord);
    }

    useEffect(() => {
        const getStorageKeyWord = localStorage.getItem('keyWord')
        if (!isSavedFilmsPage && getStorageKeyWord && getStorageKeyWord.length !== 0) {
            setKeyWord(JSON.parse(getStorageKeyWord));
            setShortMeter(JSON.parse(localStorage.getItem('shortMeter')));

            console.log("getStorageKeyWord", getStorageKeyWord)
        }
    }, [])


    return (

        <form className="result_main_search" >

            <div className="setinfo__error">{props.info}</div>
            {/**/}

            <div className="result_main_search__conteiner">
                <div className="lupa-film">
                    <div className="result_main_search_icon"/>
                    <div className="result_main_search_icon__lupa"/>
                    <div className="form__input_film">
                        <input type='text'
                               name="search"
                               value={keyWord}
                               onChange={handleSearchField}
                               placeholder='Кино'
                               className="result_main_search_icon_film"
                               required
                        />
                        <div className="setinfo__error">{info}</div>
                        {/**/}
                    </div>
                </div>
                <div className="correct">
                    <button className="result_main_search__button_find" type="button"
                            onClick={handleSubmit}
                    />
                    <div className="find-line-icon">
                        <div className="result_main_search_icon_line">
                        </div>
                        <div className="icon-shortfilm">
                            <div className="result_main_search_icon_smalltube decktop ">
                                <Checkbox handleCheckbox={handleCheckbox}
                                          shortMeter={shortMeter}
                                />
                            </div>
                            <div className="result_main_search_icon_shortfilm decktop ">Короткометражки</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-shortfilm mobile">
                <div className="result_main_search_icon_smalltube mobile">
                    <Checkbox handleCheckbox={handleCheckbox}
                              shortMeter={shortMeter}
                    />
                </div>
                <div className="result_main_search_icon_shortfilm mobile">Короткометражки</div>
            </div>
        </form>
    )
}

export default ResultMainSearch;
