import React from "react";
import './Header.css';
import Image_world from "../images/Image_world.svg";
import '../index.css';
import ButtonKnowMore from './ButtonKnowMore';

function Project(props){

return(
    <>
<div className="project">
    <div>
        <div className="project__description">
            Учебный проект студента факультета Веб-разработки.
        </div>
        <div className="project__content">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </div>
        <ButtonKnowMore/>
    </div>
 {/*   <img className="project__foto" src={Image_world} alt="Фотка"/>*/}
<img src={Image_world} className="project__foto" alt="непонятная картинка" />
</div>

</>

    )}
export default Project;