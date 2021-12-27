import React, {useState,} from 'react';
import {useRouteMatch} from 'react-router-dom';
import '../Card/Card.css';
import TimeConvert from '../../../utils/TimeConvert/TimeConvert';
import '../../../index.css';
function MovieCard(props) {

    const urlAllFilm = 'https://api.nomoreparties.co';

    const [isDelete, setIsDelete] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const isLikedSavedFilms = useRouteMatch({path: '/saved-movies', exact: true});

    function toggleLike() {
        setIsLiked(!isLiked);
    }
    function handleSave(){
       props.isSave(props.cardData);
    }
    function handleDelete(evt){
        props.isDelete(props.cardData);
    }
function handleLike(){
   if (!isLiked) {
       handleSave({
           country: props.cardData.country,
           director: props.cardData.director,
           duration: props.cardData.duration,
           year: props.cardData.year,
           description: props.cardData.description,
           movieId: props.cardData.movieId,
           nameRU: props.cardData.nameRU,
           nameEN: props.cardData.nameEN,
           thumbnail: props.cardData.thumbnail,
           image: props.cardData.image.url,
           trailer: props.cardData.trailerLink,
       })

       setIsLiked(true);
   } else {
       setIsLiked(false);
       const likedSavedMovie = isLiked.find(props.movie.movieId)} /*#### лайкнутое кино верно?*/
       handleDelete(props.cardData.likedSavedMovie);
   }
const likeButton = `${isLiked ? "card__container_like_active" : "card__container_like_passive"}` ;
        {/*   {`${isLikedSavedFilms ? "like__delete" : ''}`} onClick={toggleLike}`*/}
    return (
        <form className="card__container">
            <a target="_blank" rel="noopener noreferrer"
               className="card__image" href={props.cardData.trailerLink}>
                <img alt="Постер киношки" className="card__image" src={urlAllFilm + props.cardData.image.url}/></a>

            <div className="combini">
                <div className="card__container_name">{props.cardData.nameRU || props.cardData.nameEN}</div>
                {/*длительность кино линия и время*/}
{/*
                <button className={`like card__container_like_passive ${isLiked ? "card__container_like_active" && props.isSave: ''}`} onClick={props.isSave ? handleDelete : handleSave} >
                    {`${isLikedSavedFilms ? "like__delete" : ''}`} onClick={toggleLike}`
                    {`${isLikedSavedFilms ? '' : 'SAVE ME'}`}
                </button>
*/}
                <button className = {`like card__container_like_passive ${likeButton}`} onClick={props.isSave ? handleDelete : handleSave}>

                </button>


            </div>
            <div className="card__container_time_line"/>
            <div className="card__container_line"/>
            <p className="card__container_time">{TimeConvert(props.cardData.duration)}</p>

        </form>

    )
}

export default MovieCard;