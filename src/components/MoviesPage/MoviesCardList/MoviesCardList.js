import React, {useEffect, useState,}  from "react";
import  '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../../MoviesPage/Card/Card';
//import kino from '../../../images/kino.svg';
import Card from "../Card/Card";
import apiMovies from "../../../utils/MoviesApi";
function MoviesCardList(props){
        const [cards, setCards] = useState([]);
  useEffect(() => {

                        apiMovies.getAllAboutMovies()
                            .then((res) => {
                                    console.log(res);
                                    setCards(res)
                            })
                            .catch((err) => console.log('MAMA, Карточки не  получены!!!: ' + err.toString()))

 }, [cards]);

        return(

    <section className="moviesCard_list">

      {cards &&
        cards.map(card => (
            <Card cardData={card}/>))}

    </section>
)
}

export default MoviesCardList;
