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


    const MovieCard = lazy(() => import('../Card/MovieCard')); /* для прелоадера */

    useEffect(() => {
                        apiMovies.getAllAboutMovies()
                            .then((res) => {
                                    console.log(res);
                                    console.log(getExpandWidth());
                                    setCards(res)
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


