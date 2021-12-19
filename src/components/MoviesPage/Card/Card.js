import React from 'react';
import '../Card/Card.css';
import kino from '../../images/kino.svg';
import smalltumb from '../../images/smalltumb.svg';
import find from '../../images/find.svg';
import like_active from '../../images/like_active.svg';
import like_passive from '../../images/like_passive.svg';
import line_time_duration from '../../images/line_time_duration.svg';
import TimeConvert from '../../../utils/TimeConvert/TimeConvert';
import '../../../index.css';

function Card(props){
    const urlAllFilm = 'https://api.nomoreparties.co';

    return(
        /**/
        <form className="card__container" >
{/*сама картинка*/}
            <a target="_blank" rel="noopener noreferrer"
               className="card__image" href = { props.cardData.trailerLink} >
                <img  className="card__image" src={urlAllFilm + props.cardData.image.url} /></a>

              {/*  <img  className="card__image" src={urlAllFilm + props.cardData.image.url} />*/}

                {/*контейнер название и лайк*/}
                <div className= "card__container_name_like">


                    <div className= "card__container_name">{props.cardData.nameRU}</div>
                    <div className= "card__container_like_passive"> </div>
                </div>
                {/*длительность кино линия и время*/}
                <div className="card__container_time_line"> </div>
                   <div className= "card__container_line"> </div>
                   <div className= "card__container_time">{TimeConvert(props.cardData.duration)}</div>

        </form>

    )
}
export default Card;