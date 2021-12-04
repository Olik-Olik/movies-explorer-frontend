import React from "react";
import '../index.css';
function Techs(props){
    return(
<section className="techs">
    <p className= "techs__title_small">Технологии
    </p>
    <p className= "techs__title">7 технологий
    </p>
    <p className= "techs__title techs__body">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте. </p>

    <div  className="techs__button">
        <button className="techs__button_1 techs__button" onClick={'{/* не тыкабельна*/}'}>HTML</button>
        <button className="techs__button_2 techs__button" onClick={'{/* не тыкабельна */}'}>CSS</button>
        <button className="techs__button_3 techs__button" onClick={'{/* не тыкабельна */}'}>JS</button>
        <button className="techs__button_4 techs__button" onClick={' не тыкабельна'}>React</button>
        <button className="techs__button_5 techs__button" onClick={' не тыкабельна'}>Git</button>
        <button className="techs__button_6 techs__button" onClick={' не тыкабельна '}>Express.js</button>
        <button className="techs__button_7 techs__button" onClick={' не тыкабельна'}>mongoDB</button>

    </div>
</section>)
}
export default Techs;