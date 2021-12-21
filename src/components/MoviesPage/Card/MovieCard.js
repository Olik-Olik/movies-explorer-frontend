import React, {useState,} from 'react';
import {useRouteMatch} from 'react-router-dom';
import '../Card/Card.css';

import TimeConvert from '../../../utils/TimeConvert/TimeConvert';
import '../../../index.css';

function MovieCard(props) {


    const urlAllFilm = 'https://api.nomoreparties.co';

//const { card, isLiked }  = props.cardData.movie;
    const [isDelete, setIsDelete] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const isLikedSavedFilms = useRouteMatch({path: '/saved-movies', exact: true});

    function toggleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <form className="card__container">
            <a target="_blank" rel="noopener noreferrer"
               className="card__image" href={props.cardData.trailerLink}>
                <img alt="Постер киношки" className="card__image" src={urlAllFilm + props.cardData.image.url}/></a>

            <div className="combini">
                <div className="card__container_name">{props.cardData.nameRU || props.cardData.nameEN}</div>
                {/*длительность кино линия и время*/}
                <button className={`like card__container_like_passive ${isLiked ? "card__container_like_active" : ''} 
            ${isLikedSavedFilms ? "like__delete" : ''}`} onClick={toggleLike}>

                </button>
            </div>
            <div className="card__container_time_line"/>
            <div className="card__container_line"/>
            <p className="card__container_time">{TimeConvert(props.cardData.duration)}</p>

        </form>

    )
}

export default MovieCard;