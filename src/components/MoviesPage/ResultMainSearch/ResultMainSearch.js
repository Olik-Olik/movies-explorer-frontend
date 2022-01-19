import './ResultMainSearch.css';
import '../../../index.css';
import Checkbox from "../../Checkbox/Checkbox";
import React, {useEffect, useState} from "react";
import '../../../components/SignUpPage/Register.css';

function ResultMainSearch(props) {

    const [keyWord, setKeyWord] = useState('');
    const [shortMeter, setShortMeter] = useState(false); /*true*/
    const [info, setInfo] = useState('');

    /*для хранения в локалстораге*/
    const [searchedMovies, setSearchedMovies] = useState('');
    const [inputKey, setInputKey] = useState('');
    const [inputShortMeter, setInputShortMeter] = useState(false);

    function handleSearchField(evt) {
        evt.preventDefault();
        setKeyWord(evt.target.value);
        //props.setSearchCriteria(keyWord, shortMeter);
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
        props.setSearchCriteria(keyWord, shortMeter);
    }

    /*useEffect(() =>{
       localStorage.getItem('key').length > 0
      setInputKey(JSON.parse(localStorage.getItem('key')))
  },[])
*/
    useEffect(() =>{
        const storageKey = localStorage.getItem('key')
        if (storageKey === true)
            setInputKey(JSON.parse(localStorage.getItem('key')))
            setInputShortMeter(JSON.parse(localStorage.getItem('box')))

        console.log("InputShortMeter", inputShortMeter)
        console.log( "ShortMeter" , props.shortMeter)
    },[])

    /*useEffect(() =>{
        const storageShortMeter = localStorage.getItem('box')
        if (storageShortMeter === true)
            setInputShortMeter(JSON.parse(localStorage.getItem('box')))
    },[])
*/

    return (

        <form className="result_main_search" /*onSubmit={handleSubmit}*/>

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
                                          checked={inputShortMeter}
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
