import React, {useEffect, useState,}  from "react";
import  '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../../MoviesPage/Card/Card';
//import kino from '../../../images/kino.svg';
import Card from "../Card/Card";
import apiMovies from "../../../utils/MoviesApi";
function MoviesCardList(props){
        const [cards, setCards] = useState([]);
  //      const [loaded, setLoaded] = useState(false);

  useEffect(() => {

                        apiMovies.getAllAboutMovies()
                            .then((res) => {
                                    console.log(res);
//                             //       setLoaded(true);
                           //         props.loading(false);
                                    setCards(res)
                                console.log('Киношки загрузились корректно!')
                            })
                            .catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
 }, []);


    /*
        useEffect(() => {
            props.loading(false);
        }, [loaded]);
    */

    return(
    <section className="moviesCard_list">

      {cards &&
        cards.map(card => (
            <Card cardData={card}/>))}
    </section>
)
}


export default MoviesCardList;
