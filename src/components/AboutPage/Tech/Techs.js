import React from "react";
import '../../../index.css';

function Techs(props) {
    return (
        <section className="techs">
            <p className="techs__title_small">Технологии
            </p>
            <p className="techs__title">7 технологий
            </p>
            <p className="techs__body">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                проекте. </p>

            <div className="tech__button">
                <button className="techs__button" >HTML</button>
                <button className="techs__button" >CSS</button>
                <button className=" techs__button" >JS</button>
                <button className=" techs__button" >React</button>
                <button className="techs__button" >Git</button>
                <button className="techs__button" >Express.js</button>
                <button className=" techs__button" >mongoDB</button>
            </div>
        </section>)
}

export default Techs;
