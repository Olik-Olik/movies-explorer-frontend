import React, {useEffect, useState,} from "react";
import '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
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

    function getShowAmount() {
        const expandWidth = getExpandWidth();
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
        console.log("Effect of search change!");
        let box = props.searchCriteria.shortMeter;
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
                    ) {
                        searchResult.push(value);
                    }
                }
            );
            setAllCards(searchResult); /*найденные*/

            localStorage.setItem('searchedMovies', JSON.stringify(searchResult));
            localStorage.setItem('keyWord', JSON.stringify((key)));
            localStorage.setItem('shortMeter', (box));

            setShownAmount(0);
            _showLimitedCards();
        } else {

            const getStorageKeyWord = localStorage.getItem('keyWord')
            if (getStorageKeyWord.length !== 0) {
                setAllCards(JSON.parse(localStorage.getItem('searchedMovies')))
            }else{
                setAllCards(props.loadedCards);/* max набор*/
            }

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
