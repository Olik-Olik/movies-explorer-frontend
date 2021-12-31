import React, {useEffect, useState, Component, Suspense, lazy, }  from "react";
import componentDidMount from 'react';
import  '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
import apiMovies from "../../../utils/MoviesApi";
import Preloader from "../../Preloader";
import getExpandWidth from "../../MoviesPage/MoviesCardList/currentWindowWidth";

function MoviesCardList(props){
    const [cards, setCards] = useState([]);
    const [shownAmount, setShownAmount] = useState(0);/*ничего не показано*/
    const [showMore, setShowMore] = useState(true);

function getShowAmount(){
    const expandWidth = getExpandWidth();
    console.log('EW: ' + expandWidth);
    if (shownAmount === 0) {
        setShownAmount(expandWidth.initialAmount);
        console.log('ret 0:' + expandWidth.initialAmount)
        return expandWidth.initialAmount;
    }
    setShownAmount(shownAmount + expandWidth.moreAmount);
    return shownAmount  + expandWidth.moreAmount;
}

    const MovieCard = lazy(() => import('../Card/MovieCard')); /* для прелоадера */

    useEffect(() => {
                        apiMovies.getAllAboutMovies()
                            .then((res) => {

                                    console.log(getExpandWidth());
                                    let amountToShow = getShowAmount();
                                    console.log('ATSH' + amountToShow);
                                    if (amountToShow > res.length) {
                                        amountToShow = res.length;
                                    }
                                    setShownAmount(amountToShow);
                                    const slicedCards = res.slice(0, amountToShow);
                                    console.log(slicedCards);
                                    setCards(slicedCards);
                                console.log('Киношки загрузились корректно!')
                            })
                            .catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
 }, []);
/*если больше */


    return(
    <section className="moviesCard_list">
      <Suspense fallback={<Preloader/>}>

       {cards &&
        cards.map(card => (
            <MovieCard
            cardData={card}
            id={card.movieId}
            name={card.name}
            duration={card.duration}
            isSave ={props.isSave}
            setIsSave={props.setIsSave}
            isDelete={props.isDelete}

            />
         ))}
        </Suspense>
 {/*   <ResultMainMore/>*/}
    </section>
)
}
export default MoviesCardList;


