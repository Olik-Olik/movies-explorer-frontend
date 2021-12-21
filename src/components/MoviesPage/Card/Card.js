import React, {useEffect, useState} from 'react';
import '../Card/Card.css';
import kino from '../../images/kino.svg';
import smalltumb from '../../images/smalltumb.svg';
import find from '../../images/find.svg';
import like_active from '../../images/like_active.svg';
import like_passive from '../../images/like_passive.svg';
import line_time_duration from '../../images/line_time_duration.svg';
import TimeConvert from '../../../utils/TimeConvert/TimeConvert';
import '../../../index.css';
/*
const Card = ({
                  isSavedMovie,
                  isDeleteMovie,
                  isDeleteSavedMovies}) => {



useEffect(() =>{
    if (cardData.isSavedMovie.include(movieId)){
        setIsLiked(true);}
    else {
        setIsLiked(false);
    }},[savedId, setIsLiked]

)

const  handleDeleteMovie = () =>{
        isDeleteMovie(props.movie})*/
const handleLike = (props) => {
}

function Card(props){
    const urlAllFilm = 'https://api.nomoreparties.co';
    const [isLiked, setIsLiked] =useState(false);
    return(
        <form className="card__container" >
            <a target="_blank" rel="noopener noreferrer"
               className="card__image" href = { props.cardData.trailerLink} >
                <img alt="Постер киношки" className="card__image" src={urlAllFilm + props.cardData.image.url} /></a>
              {/*  <img  className="card__image" src={urlAllFilm + props.cardData.image.url} />*/}
                {/*контейнер название и лайк*/}

                <div className= "card__container_name_like">
                    <div className= "card__container_name">{props.cardData.nameRU || props.cardData.nameEN }</div>

                    {!props.isSavedMovie ?(
                        <button className = {`"card__container_like_passive"
                        ${isLiked ? "card__container_like_active" :  "card__container_like_passive"}`}
                     /*   onClick={}*/
                        >

                        </button>
                    ) : (<div className="card__delete"
                 /*   onClick={}*/
                    />)

                    }

                        {/* {if  like  : active} : { isSavedMovie  ? delete}
                        "card__container_like_passive|| card__delete||  card__container_like_active" */}
             {/*   onClick={!isLiked ? handleLikeSaveFilm : handleDeleteFilm}*/}

                </div>
                {/*длительность кино линия и время*/}
                <div className="card__container_time_line"> </div>
                   <div className= "card__container_line"> </div>
                   <p className= "card__container_time">{TimeConvert(props.cardData.duration)}</p>

        </form>

    )
}
export default Card;