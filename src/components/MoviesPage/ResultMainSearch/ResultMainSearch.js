import './ResultMainSearch.css';
import '../../../index.css';
import Checkbox from "../../Checkbox/Checkbox";
import React, {useState} from "react";
import  '../../../components/SignUpPage/Register.css';
function ResultMainSearch(props) {

    const [keyWord, setKeyWord] = useState('');
    const [shortMeter, setShortMeter] = useState(false);
    const [info, setInfo] = useState('');

    function handleSearchField(evt) {
        evt.preventDefault();
        console.log('KW: ' + evt.target.value);
        setKeyWord(evt.target.value)
    }

    function handleCheckbox(evt) {
        console.log('SM: ' + evt.target.checked);
        setShortMeter(evt.target.checked);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log('SSC');
        props.setSearchCriteria(keyWord, shortMeter);
    }

    return (

        <form className="result_main_search" /*onSubmit={handleSubmit}*/>

            <div className="setinfo__error">{props.info}</div> {/**/}

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
                          /*     maxLength="40" minLength="2"*/
                        />
                        <div className="setinfo__error">{info}</div> {/**/}

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
    )
}

export default ResultMainSearch;
