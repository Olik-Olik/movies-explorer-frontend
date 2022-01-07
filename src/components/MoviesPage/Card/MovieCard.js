import React, {useContext, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import '../Card/Card.css';
import TimeConvert from '../../../utils/TimeConvert/TimeConvert';
import '../../../index.css';
import apiAuth from "../../../utils/MainApi";
import {CurrentUserContext} from '../../../utils/context/CurrentUserContext';



function MovieCard(props) {

    const urlAllFilm = 'https://api.nomoreparties.co';
    const isSavedFilmsPage = useRouteMatch({path: '/saved-movies', exact: true});

/*    const [savedCard, setSavedCard] = useState([]); /!*сначала ничего нет*!/*/

    function handleDelete(movieId) {
        console.log("Удаление");
        apiAuth.deleteMovie(movieId)
            .catch((err) => console.log('Кино не удалилось!: ' + err.toString()))
    }


   /* function handleCardDeleteClick(card) {
        //  const isOwn = card.owner._id === currentUser._id;
        const isOwn = card.owner === currentUser._id;
        if (isOwn) {
            api.submitRemoveCard(card._id)
                .then(newArrCards => {
                    /!* !!!!  бывают ситуации, что где-то уже изменили эту переменную,
                    но еще не обновились данные в ней, а Вы попытаетесь изменить старые данные, которые неактуальны больше*!/
                    setCards((state) => state.filter((c) => c._id !== card._id))
                })*/


    function handleSave(evt) {
        evt.preventDefault();
        if (!props.cardData.isLiked) {
            apiAuth.createMovie(
                props.cardData.country,
                props.cardData.director,
                props.cardData.duration,
                props.cardData.year,
                props.cardData.description,
                props.cardData.id,
                props.cardData.nameRU,
                props.cardData.nameEN,
                urlAllFilm + props.cardData.image.url,
                props.cardData.thumbnail,
                props.cardData.trailerLink
            ).catch((err) => {
                console.log('Не сохраняется :( ' + err.toString());

            })
            props.cardData.isLiked = true ;
            // setSavedCard(savedCard); /*при сохранении в массив*/

            console.log('Saved Film')
        } else {
            props.cardData.isLiked = false;
            handleDelete(props.cardData.id);
        }
    }

    let likeClass = 'like ';
    let likeOnClick = () => {console.log('Fix me!!!')};

    if (isSavedFilmsPage) {
        likeClass += ' card__container_like_active ' + props.cardData.isLiked ? 'like__delete' : '';
        likeOnClick = handleDelete
    }
    else{
        if (props.cardData.isLiked) {
            likeClass += ' like card__container_like_active elements__like_active';
            likeOnClick = handleDelete;
        } else {
            likeClass += ' like card__container_like_active elements__like';
            likeOnClick = handleSave;
        }
    }

    return (
            <>
                {console.log('Render CARD!!!')}
            <form className="card__container">
                <a target="_blank" rel="noopener noreferrer"
                   className="card__image" href={props.cardData.trailerLink}>
                    <img alt="Постер киношки" className="card__image" src={urlAllFilm + props.cardData.image.url}/></a>

                <div className="combini">
                    <div className="card__container_name">{props.cardData.nameRU || props.cardData.nameEN}</div>
                    {/*длительность кино линия и время*/}

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

