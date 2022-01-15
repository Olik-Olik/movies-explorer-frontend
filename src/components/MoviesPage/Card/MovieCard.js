import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import '../Card/Card.css';
import TimeConvert from '../../../utils/TimeConvert/TimeConvert';
import '../../../index.css';
import apiAuth from "../../../utils/MainApi";

function MovieCard(props) {

    const [likeMe, setLikeMe] = useState(false);
    const isSavedFilmsPage = useRouteMatch({path: '/saved-movies', exact: true});

    function handleDelete() {
        console.log("Удаление");
        apiAuth.deleteMovie(props.cardData.movieId).then(() => {
            props.cardData.isLiked = false;
            setLikeMe(props.cardData.isLiked);
        })
            .catch((err) => console.log('Кино не удалилось!: ' + err.toString()))
    }

    function handleSave(evt) {
        evt.preventDefault();
        if (!props.cardData.isLiked) {
            apiAuth.saveMovie(
                props.cardData.country,
                props.cardData.director,
                props.cardData.duration,
                props.cardData.year,
                props.cardData.description,
                props.cardData.id,
                props.cardData.nameRU,
                props.cardData.nameEN,
                props.cardData.trailerLink,
                props.cardData.imageURL,
            ).then(() => {
                props.cardData.isLiked = true;
                setLikeMe(props.cardData.isLiked);
                console.log('Saved Film')
            })
                .catch((err) => {
                    console.log('Не сохраняется :( ' + err.toString());
                })
        } else {
            handleDelete();
        }
    }

    let likeClass = 'like ';
    let likeOnClick = () => {
    };

    if (isSavedFilmsPage) {
        likeClass += props.cardData.isLiked ? 'like__delete' : '';
        likeOnClick = handleDelete
    } else {
        if (props.cardData.isLiked) {
            likeOnClick = handleDelete;
        } else {
            likeClass += 'card__container_like_passive';
            likeOnClick = handleSave;
        }
    }

    useEffect(() => {
        }
        , [likeMe])

    return (
        <>
            <form className="card__container">
                <a target="_blank" rel="noopener noreferrer"
                   className="card__image" href={props.cardData.trailerLink}>
                    <img alt="Постер киношки" className="card__image" src={props.cardData.imageURL}/></a>

                <div className="combini">
                    <div className="card__container_name">{props.cardData.nameRU || props.cardData.nameEN}</div>
                    <div
                        className={likeClass}
                        onClick={likeOnClick}> </div>
                </div>
                <div className="card__container_time_line"/>
                <div className="card__container_line"/>
                <p className="card__container_time">{TimeConvert(props.cardData.duration)}</p>

            </form>
        </>
    )
}

export default MovieCard;
