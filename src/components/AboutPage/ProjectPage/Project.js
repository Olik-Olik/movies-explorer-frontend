import React from "react";
import '../../Header.css';
import Image_world from "../../images/Image_world.svg";
import '../../../index.css';
import ButtonKnowMore from '../ButtonKnowMore/ButtonKnowMore';

function Project(props){

return(
    <>
<div className="project" >
    <div  className="project__content-container"  >
    <div   className="project__button-container">
        <div className="project__description">
            Учебный проект студента факультета Веб-разработки.
        </div>
        <div className="project__content">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </div>

</div>
        <ButtonKnowMore/>
</div>

        <img src={Image_world} className="project__foto" alt="непонятная картинка" />
</div>
</>

    )}
export default Project;