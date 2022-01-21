import React from "react";
import './ButtonKnowMore.css';
import '../ProjectPage/Project.css';
import '../../../index.css';

function ButtonKnowMore(props) {

    return (
        <a href="/movies">
            <button className="button__main">
                <p>Узнать больше</p>
            </button>
        </a>
    )
}

export default ButtonKnowMore;
