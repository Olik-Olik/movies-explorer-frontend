import React from "react";
import './BeginPage.css';
import '../index.css';
//import '../components/Project.css'
import landing from '../images/landing.svg';



function BeginPage(props){

    return(
<><div>
        <div className="landing">
            <img src={landing} className="landing__container" alt="непонятная картинка" />
    <div className="text">
        Учебный проект студента факультета Веб-разработки.
    </div>  </div>
</div>
</>
    )}
export default BeginPage;