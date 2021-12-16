import React from "react";
import './ButtonKnowMore.css';
import '../ProjectPage/Project.css';
import '../../../index.css';

function ButtonKnowMore(props){

    return(
        /* без понятия куда отправлять может на кино? отправлю сюда или сюда надо profile */
<a href="/movies">
            <button className="button__main" >
                <p>Узнать больше</p>
            </button>
</a>
    )}
export default ButtonKnowMore;