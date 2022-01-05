import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import '../Card/Card.css';
import TimeConvert from '../../../utils/TimeConvert/TimeConvert';
import '../../../index.css';
import apiAuth from "../../../utils/MainApi";

function MovieCard(props) {

    const urlAllFilm = 'https://api.nomoreparties.co';
    const isLikedSavedFilms = useRouteMatch({path: '/saved-movies', exact: true});

    function handleDelete(movieId) {
        apiAuth.deleteMovie(movieId)
            .catch((err) => console.log('Кино не удалилось!: ' + err.toString()))
    }

    function handleSave(evt) {
        evt.preventDefault();
        if (!props.cardData.isSaved) {
            apiAuth.createMovie(
                props.cardData.country,
                props.cardData.director,
                props.cardData.duration,
                props.cardData.year,
                props.cardData.description,
                props.cardData.movieId,
                props.cardData.nameRU,
                props.cardData.nameEN,
                urlAllFilm + props.cardData.image.url,
                props.cardData.thumbnail,
                props.cardData.trailerLink
            ).catch((err) => {
                console.log('Нет кина :( ' + err.toString());

            })
            props.cardData.isSaved(true);
        } else {
            props.cardData.isSaved(false);
            handleDelete(props.cardData.movieId);
        }

        return (
            <form className="card__container">
                <a target="_blank" rel="noopener noreferrer"
                   className="card__image" href={props.cardData.trailerLink}>
                    <img alt="Постер киношки" className="card__image" src={urlAllFilm + props.cardData.image.url}/></a>

                <div className="combini">
                    <div className="card__container_name">{props.cardData.nameRU || props.cardData.nameEN}</div>
                    {/*длительность кино линия и время*/}

                    <button
                        className="like card__container_like_passive
                           `${isLikedSavedFilms ? ' like__delete ' : ' ' }
                         {props.cardData.isSaved ? ' card__container_like_active ' : ' '}`

                        "
                        onClick={handleSave}>
                    </button>
                </div>
                <div className="card__container_time_line"/>
                <div className="card__container_line"/>
                <p className="card__container_time">{TimeConvert(props.cardData.duration)}</p>

            </form>

        )
    }
}

export default MovieCard;

