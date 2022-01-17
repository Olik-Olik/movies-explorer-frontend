import React, {lazy, Suspense, useEffect, useState,} from "react";
import '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
import Preloader from "../../Preloader";
import getExpandWidth from "../../MoviesPage/MoviesCardList/currentWindowWidth";
import ResultMainMore from "../ResultMainMore/ResultMainMore";
import {FILM_DURATION} from '../../../utils/constants';

function MoviesCardList(props) {
    const [allCards, setAllCards] = useState(null);
    const [cards, setCards] = useState([]);
    const [shownAmount, setShownAmount] = useState(0);
    const [showMore, setShowMore] = useState(true);
    const [info, setInfo] = useState('');
    const [searchedMovies, setSearchedMovies] = useState('');

    function getShowAmount() {
        const expandWidth = getExpandWidth();
        console.log('EW: ' + expandWidth.toString());
        if (shownAmount === 0) {
            console.log('ret 0:' + expandWidth.initialAmount)
            return expandWidth.initialAmount;
        }
        return shownAmount + expandWidth.moreAmount;
    }

    function _showLimitedCards() {
        if (!allCards) {
            return
        }
        const res = allCards;
        console.log(getExpandWidth());
        let amountToShow = getShowAmount();
        console.log('ATSH ' + amountToShow);
        if (amountToShow >= res.length) {
            amountToShow = res.length;
            setShowMore(false);
        } else
            setShowMore(true);/**/
        const slicedCards = res.slice(0, amountToShow);
        console.log(slicedCards);
        setCards(slicedCards);
        setShownAmount(amountToShow);
    }

    function handleMoreClick() {
        _showLimitedCards()
    }

    /*по слову*/ /**/
    function handleSearchedWord(evt) {
        setSearchedMovies(evt.target.value);
    }

    const MovieCard = lazy(() => import('../Card/MovieCard'));

    /*фтльтрованных*/
    useEffect(() => {
        _showLimitedCards();
    }, [allCards])


    /*
        useEffect(() => {
            let box = props.searchCriteria.shortMeter;
            console.log('UF: [props.searchCriteria]');
            if (props.searchCriteria.doSearch) {
                console.log('по ключевому слову...');
                let searchResult = [];
                props.loadedCards.forEach(function (value) {
                    let keyWord = props.searchCriteria.keyWord;
                    console.log('keyWord ' + keyWord);
                    let key = keyWord.toLowerCase();
                    let nameRU = value.nameRU.toLowerCase();
                    console.log('key ' + key);
                    if (
                    (box === true || value.duration <= FILM_DURATION) && ( nameRU.includes(key) ))

                    //   if ((key.length >= 0 &&  ((nameRU.includes(key)  ))))
                    { console.log('Тут только по ключевому слову!');
                     //   setInfo('написать по ключевому слову');
                        searchResult.push(value); }
                  //  else ( )
                });
                // (props.searchCriteria.shortMeter === true && value.duration <= FILM_DURATION) ||
                setAllCards(searchResult);
                setShownAmount(0);
                _showLimitedCards();
            } else {
                setAllCards(props.loadedCards);
                setShownAmount(0);
                _showLimitedCards();
                 setInfo('');
            }
        }, [props.searchCriteria, props.searchCriteria.doSearch, props.keyWord, props.shortMeter])*/

    useEffect(() => {
        console.log("Effect of search chenge!");
        //setAllCards(props.loadedCards);
        let box = props.searchCriteria.shortMeter;
//        let searchResultt = [];
        let searchResult = [];
        let keyWord = props.searchCriteria.keyWord;
        let key = keyWord.toLowerCase();
        if (props.searchCriteria.doSearch) {
            console.log('Key: ' + key + ":" + key.length);
            props.loadedCards.forEach(function (value) {
                let nameRU = value.nameRU.toLowerCase();
                let hasKeyWord = nameRU.includes(key);
                let isShortMeter = value.duration <= FILM_DURATION;

                if (((key.length > 0 && hasKeyWord === true) && (box === true && isShortMeter === true))
                    || (box === false && (key.length > 0 && hasKeyWord === true))
                    || (key.length <= 0 && box === true && isShortMeter === true)
                    || (box === false && key.length <= 0)
                )
                {
                    searchResult.push(value);
                }
            });
/*
            searchResultt.forEach(function (value) {
                let nameRU = value.nameRU.toLowerCase();
                if (nameRU.includes(key)) {
                    searchResult.push(value);
                }
            });
*/
            setAllCards(searchResult);
            setShownAmount(0);
            _showLimitedCards();
        } else {
            setAllCards(props.loadedCards);
            setShownAmount(0);
            _showLimitedCards();
            setInfo('Ничего не найдено');
        }
    }, [props.searchCriteria, props.searchCriteria.doSearch, props.keyWord, props.shortMeter])


    /*useEffect(() => {
        console.log('UF: [cards2.]');
        if (props.searchCriteria.doSearch) {
            console.log('Filter cards2...');
            let searchResult = [];
            props.loadedCards.forEach(function (value) {

                if (
                    /!*      (props.searchCriteria.shortMeter === true && value.duration <= FILM_DURATION) ||*!/
                    (props.searchCriteria.keyWord.length >= 0 &&
                        (value.nameRU.includes(props.searchCriteria.keyWord
                            || value.nameEN.includes(props.searchCriteria.keyWord)))
                    ))

                /!*if (
                    (props.searchCriteria.shortMeter === true && value.duration <= FILM_DURATION)
                    &&
                   (props.searchCriteria.keyWord.length >= 0 &&
                        ((value.nameRU && value.nameRU.includes(props.searchCriteria.keyWord)) || (value.nameEN && value.nameEN.includes(props.searchCriteria.keyWord)))
                    )
                )*!/
                {
                    console.log('2 search !');
                    setInfo('написать');
                    searchResult.push(value);
                }
            });
            console.log('Found: ' + searchResult.length);
            setAllCards(searchResult);
            setShownAmount(0);
            _showLimitedCards();
        } else {
            console.log('NO FILTERS...');
            console.log('Loaded cards: ' + props.loadedCards.length);
            setAllCards(props.loadedCards);
            setShownAmount(0);
            _showLimitedCards();

        }
    }, [])
*/

    return (
        <>
            <section className="moviesCard_list">
                <Suspense fallback={<Preloader/>}>
                    {cards &&
                        cards.map((card) => (
                            <MovieCard
                                key={card.id}
                                cardData={card}
                                name={card.name}
                                duration={card.duration}
                                info={info}
                            />
                        ))}
                </Suspense>
            </section>
            {showMore && <ResultMainMore handleMoreClick={handleMoreClick}/>}
        </>
    )
}

export default MoviesCardList;
/*
props.info ? (
    <div className="setinfo__error">{info}</div>)*/
