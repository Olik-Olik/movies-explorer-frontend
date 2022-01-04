import React, {lazy, Suspense, useEffect, useState,} from "react";
import '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
import apiMovies from "../../../utils/MoviesApi";
import Preloader from "../../Preloader";
import getExpandWidth from "../../MoviesPage/MoviesCardList/currentWindowWidth";
import ResultMainMore from "../ResultMainMore/ResultMainMore";

function MoviesCardList(props) {
    const [loadedCards, setLoadedCards] = useState([]);
    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [shownAmount, setShownAmount] = useState(0);/*ничего не показано*/
    const [showMore, setShowMore] = useState(true);/*кнопочка моооо */
    const [searchCriteria, setSearchCriteria] = useState({ keyWord: '', shortMeter: false});

    function handleSearchCards(){
        setSearchCriteria(props.getSearchCriteria());
    }

    function getShowAmount() {
        const expandWidth = getExpandWidth(); /* ширина есть текущая ширина*/
        console.log('EW: ' + expandWidth.toString());
        if (shownAmount === 0) {  /* ничего не показано ловим 0 словарь*/
            /*стейт текущее знач заполняем объект экспандширина св-во начальное знач для этой ширины*/
            setShownAmount(expandWidth.initialAmount);
            console.log('ret 0:' + expandWidth.initialAmount)
            /*вернем при  объекте экспандширина базисное значение*/
            return expandWidth.initialAmount;
        }
        setShownAmount(shownAmount + expandWidth.moreAmount);
        return shownAmount + expandWidth.moreAmount;
    }

    function _showLimitedCards(){
        const res = allCards;
        console.log(getExpandWidth());
        let amountToShow = getShowAmount();
        console.log('ATSH' + amountToShow);
        if (amountToShow >= res.length) {
            amountToShow = res.length;
            setShowMore(false);
        }
        setShownAmount(amountToShow);
        const slicedCards = res.slice(0, amountToShow);
        console.log(slicedCards);
        setCards(slicedCards);
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

    useEffect(() =>{
        if (props.searchCriteria.doSearch){
            console.log('Filter cards...');
            let searchResult = [];
            loadedCards.forEach(function (value){
                //searchResult.push(value);
                if (props.searchCriteria.shortMeter && value.duration <= 40){
                    searchResult.push(value);
                }
            });
            setShownAmount(0);
            setAllCards(searchResult);
            _showLimitedCards();
        }else{
            console.log('NO FILTERS...');
            setShownAmount(0);
            setAllCards(loadedCards);
        }
    }, [loadedCards])

/*отображение всех карт*/
    useEffect(() => {
        apiMovies.getAllAboutMovies()
            .then((res) => {
                console.log('Киношки загрузились корректно!');
                setShownAmount(0);
                setLoadedCards(res);
            })
            .catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
    }, []);



    return (
        <>
        <section className="moviesCard_list">
            <Suspense fallback={<Preloader/>}>

                {cards &&
                    cards.map(card => (
                        <MovieCard
                            cardData={card}
                            id={card.movieId}
                            name={card.name}
                            duration={card.duration}
                            isSave={props.isSave}
                            setIsSave={props.setIsSave}
                            isDelete={props.isDelete}
                            likedSavedMovie ={props.likedSavedMovie}/*если лайкнуто-значит в сохранено*/
                        />
                    ))}
            </Suspense>
        </section>

    { showMore && <ResultMainMore handleMoreClick={handleMoreClick}/>}

</>
    )
}

export default MoviesCardList;

