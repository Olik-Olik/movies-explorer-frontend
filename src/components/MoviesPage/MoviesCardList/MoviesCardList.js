import React, {useEffect, useState, Component, Suspense, lazy, }  from "react";
import componentDidMount from 'react';
import  '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
import apiMovies from "../../../utils/MoviesApi";
import Preloader from "../../Preloader";

import useWindowWidth from "../MoviesCardList/currentWindowWidth";
import ResultMainSearch from "../ResultMainSearch/ResultMainSearch";
import ResultMainMore from "../ResultMainMore/ResultMainMore";
function MoviesCardList(props){
   const [cards, setCards] = useState([]);

    const [isRenderRow, setIsRenderRow] =useState(0);
    const [isRenderMoreRow, setIsRenderMoreRow] =useState(0);

    const moviesRow1280 = 12;
    const moviesRowMore1280=4;
    const moviesRow768 = 8;
    const moviesRowMore768 = 2;
    const moviesRow320 = 4;
    const moviesRowMore320 = 2;
    const moviesNothing = 0;

    let currentWindowWidth = useWindowWidth();

    const MovieCard = lazy(() => import('../Card/MovieCard')); /* для прелоадера */

    useEffect(() => {
                        apiMovies.getAllAboutMovies()
                            .then((res) => {
                                    console.log(res);
                                    setCards(res)
                                console.log('Киношки загрузились корректно!')
                            })
                            .catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
 }, []);

useEffect(() => {
        if (currentWindowWidth >= 1280) {
            setIsRenderRow(moviesRow1280); setIsRenderMoreRow(moviesRowMore1280)
        }

        if (currentWindowWidth >= 768) {
            setIsRenderRow(moviesRow768); setIsRenderMoreRow(moviesRowMore768)
        }

        if (currentWindowWidth >= 320) {
            setIsRenderRow(moviesRow320); setIsRenderMoreRow(moviesRowMore320)
        }
    },
    [currentWindowWidth],
)

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
            addMovies={props.addMovies}
            />
         ))}
        </Suspense>
    <ResultMainMore/>
    </section>
)

}
export default MoviesCardList;


