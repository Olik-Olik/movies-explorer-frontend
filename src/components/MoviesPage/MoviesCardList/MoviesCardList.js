import React, {lazy, Suspense, useEffect, useState,} from "react";
import '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
import Preloader from "../../Preloader";
import getExpandWidth from "../../MoviesPage/MoviesCardList/currentWindowWidth";
import ResultMainMore from "../ResultMainMore/ResultMainMore";

function MoviesCardList(props) {
    const [allCards, setAllCards] = useState(null);
    const [cards, setCards] = useState([]);
    const [shownAmount, setShownAmount] = useState(0);/*ничего не показано*/
    const [showMore, setShowMore] = useState(true);/*кнопочка моооо */

    function getShowAmount() {
        const expandWidth = getExpandWidth(); /* ширина есть текущая ширина*/
        console.log('EW: ' + expandWidth.toString());
        if (shownAmount === 0) {  /* ничего не показано ловим 0 словарь*/
            /*стейт текущее знач заполняем объект экспандширина св-во начальное знач для этой ширины*/
            //  setShownAmount(expandWidth.initialAmount);
            console.log('ret 0:' + expandWidth.initialAmount)
            /*вернем при  объекте экспандширина базисное значение*/
            return expandWidth.initialAmount;
        }
        // setShownAmount(shownAmount + expandWidth.moreAmount);
        return shownAmount + expandWidth.moreAmount;
    }

    function _showLimitedCards(){
        if (!allCards) {return}
        const res = allCards;
        console.log(getExpandWidth());
        let amountToShow = getShowAmount();
        console.log('ATSH ' + amountToShow);
        if (amountToShow >= res.length) {
            amountToShow = res.length;
            setShowMore(false);
        }
        const slicedCards = res.slice(0, amountToShow);
        console.log(slicedCards);
        setCards(slicedCards);
        setShownAmount(amountToShow);
    }

    /*клац по кнопке еще*/
    function handleMoreClick() {
        _showLimitedCards()
    }

    const MovieCard = lazy(() => import('../Card/MovieCard')); /* для прелоадера */

/*фтльтрованных*/
    useEffect(() => {
        _showLimitedCards();
    }, [allCards])

    useEffect(() => {
        if (props.searchCriteria.doSearch){
            console.log('Filter cards...');
            let searchResult = [];
            props.loadedCards.forEach(function (value){
                if ((props.searchCriteria.shortMeter && value.duration <= 40)
                    && (props.searchCriteria.keyWord &&
                        ( (value.nameRU && value.nameRU.includes(props.searchCriteria.keyWord)) || ( value.nameEN && value.nameEN.includes(props.searchCriteria.keyWord)))
                    )) {
                    console.log('Seach hit!');
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
    }, [props.searchCriteria.doSearch])

    useEffect(() =>{
        if (props.searchCriteria.doSearch){
            console.log('Filter cards...');
            let searchResult = [];
            props.loadedCards.forEach(function (value){
                //console.log("VD: " + value.duration);
                if ((props.searchCriteria.shortMeter && value.duration <= 40)
                    && (props.searchCriteria.keyWord &&
                    ( (value.nameRU.includes(props.searchCriteria.keyWord)) || (value.nameEN.includes(props.searchCriteria.keyWord)))
                )) {
                    console.log('Seach hit!');
                    searchResult.push(value);
                }
            });
            console.log('Found: ' + searchResult.length);
            setAllCards(searchResult);
            setShownAmount(0);
            _showLimitedCards();
        }else{
            console.log('NO FILTERS...');
            console.log('Loaded cards: ' + props.loadedCards.length);
            setAllCards(props.loadedCards);
            setShownAmount(0);
            _showLimitedCards();
        }
    }, [])


    return (
        <>
        <section className="moviesCard_list">
            <Suspense fallback={<Preloader/>}>

                {cards &&
                    cards.map((card) => (
                        /*console.log('CardID: ' + card.id)*/
                        <MovieCard
                            cardData={card}
                            name={card.name}
                            duration={card.duration}
                        />
                    ))}
            </Suspense>
        </section>

    { showMore && <ResultMainMore handleMoreClick={handleMoreClick}/>}

</>
    )
}

export default MoviesCardList;

