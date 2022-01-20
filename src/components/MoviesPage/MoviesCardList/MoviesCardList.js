import React, {lazy, Suspense, useEffect, useState,} from "react";
import '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
import Preloader from "../../Preloader";
import getExpandWidth from "../../MoviesPage/MoviesCardList/currentWindowWidth";
import ResultMainMore from "../ResultMainMore/ResultMainMore";
import {FILM_DURATION} from '../../../utils/constants';


// const MovieCard = lazy(() => (import('../Card/MovieCard')), 500);

//const ResultMainMore = lazy(() =>import('../Card/MovieCard'));

function MoviesCardList(props) {
    const [isLoading, setLoading] = useState(true);
    const [allCards, setAllCards] = useState(null);
    const [cards, setCards] = useState([]);
    const [shownAmount, setShownAmount] = useState(0);
    const [showMore, setShowMore] = useState(true);
    const [info, setInfo] = useState('');

/*    /!*для хранения в локалстораге*!/
    const [searchedMovies, setSearchedMovies] = useState('');
    const [inputKey, setInputKey] = useState('');
    const [inputShortMeter, setInputShortMeter] = useState(false);*/


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

    /*фтльтрованных*/
    useEffect(() => {
        _showLimitedCards();
    }, [allCards])


    useEffect(() => {
        console.log("Effect of search chenge!");
        let box = props.searchCriteria.shortMeter;
        let searchResult = [];
        let keyWord = props.searchCriteria.keyWord;
        let key = keyWord.toLowerCase();
     /*2222*/
        let allCards = localStorage.getItem('allCards');
/*если он искал уже фильмы => */

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
                ) {
                    searchResult.push(value);

                }
      /*1111*/   /*     if (key.length <= 0) { setInfo('Ничего не найдено')}
             else if ( keyWord === false) { setInfo('Введите слово для поиска ')}*/

            }
            );
            setAllCards(searchResult); /*найденные*/
 /*222*/    localStorage.setItem('searchedMovies',JSON.stringify(searchResult));
            localStorage.setItem('keyWord',JSON.stringify(key));
            localStorage.setItem('shortMeter',JSON.stringify(box));

            setShownAmount(0);
            _showLimitedCards();
        } else {
  /*222*/   setAllCards(props.loadedCards);/* max набор*/
            setShownAmount(0);
            _showLimitedCards();
            setInfo('Ничего не найдено. Введите другое значение.');
        }
    }, [props.searchCriteria, props.searchCriteria.doSearch, props.keyWord, props.shortMeter])



    return (
        <>
            <section className="moviesCard_list">

                    {cards.length > 0 ? (
                        cards &&
                        cards.map((card) => (
                            <MovieCard
                                key={card.id}
                                cardData={card}
                                name={card.name}
                                duration={card.duration}
                                info={info}
                            />)
                        )
                    ) : (<div className="setinfo__error">{info}</div>)
                    }

            </section>

            {showMore && <ResultMainMore handleMoreClick={handleMoreClick}/>}

        </>
    )
}
export default MoviesCardList;


