import React from 'react';
import '../Card/Card.css';
import kino from '../../../images/kino.svg';
import smalltumb from '../../../images/smalltumb.svg';
import find from '../../../images/find.svg';
import like_active from '../../../images/like_active.svg';
import like_passive from '../../../images/like_passive.svg';
import line_time_duration from '../../../images/line_time_duration.svg';

import '../../../index.css';

function Card(props){
    return(
        /**/
        <form className="card__container" /*onChange={handleFormChange}*/>
{/*сама картинка*/}
            <div className="card__image"> </div>
                {/*контейнер название и лайк*/}
                <div className= "card__container_name_like">
                    <div className= "card__container_name">Констатация фактов </div>
                    <div className= "card__container_like_active"> </div>
                </div>
                {/*длительность кино линия и время*/}
                <div className="card__container_time_line"> </div>
                   <div className= "card__container_line"> </div>
                   <div className= "card__container_time">1ч 42м </div>

        </form>

    )
}
export default Card;