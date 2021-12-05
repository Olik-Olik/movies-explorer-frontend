import React from 'react';
import '../components/AboutMe.css';
import fotoMe from '../images/AboutMe/fotoMe.JPG';
import line from '../images/line.svg';
import strelka from '../images/strelka.svg';
import '../index.css';

function AboutMe(props) {
    return (
        <>
            <h2 className='aboutMe__whoIS'>Студент</h2>
            <img className="aboutMe__lineSimple" src={line} alt="Линия"/>
           {/* <div className='line'/>*/}
            <div className='aboutMe__myName'>OLIK</div>
            <div className='aboutMe__work'>Фронтенд-разработчик, 99 лет</div>
            <div className= 'aboutMe__descriptionFoto'>
                <div className='aboutMeTitleAbout'>Я родился и живу в Москве,
                    закончил МИФИ. Я не люблю слушать музыку,она мешает сосредоточиться. Сейчас увлекаюсь пирожными,
                    шоколадом и сгущенкой. А еще люблю море и все красивое.Недавно начал кодить и читать полезные
                    книжки, с 2021г.
                    После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами.</div>

                <div className='aboutMeFoto'>
                    <img className="imgfotoMe" src={fotoMe} alt="Фотка"/>
                </div>
            </div>

            <div className="aboutMe__connect">
            <a target="_blank" rel="noopener noreferrer" className="aboutMe__gitHub" href={ "https://github.com/Olik-Olik"}>GitHub</a>
            <a target="_blank" rel="noopener noreferrer" className="aboutMe__facebook" href={ "https://www.facebook.com/profile.php?id=100000879196200"}>Facebook</a>
            </div>

             <p className="aboutMe__portfolio">Портфолио</p>

            <div className='links'>
                    <div className="aboutMeLinks">
                        <div className="a">
                        <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkStatic"
                           href={"https://www.facebook.com/profile.php?id=100000879196200"}>Статичный сайт
                            <img className="aboutMe__strelka" src={strelka} alt="Стрелка"/></a>
                    </div>
                <div>
                        <img className="aboutMe__lineSimple" src={line} alt="Линия"/>
                        <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkAdaptive"
                           href={"https://www.facebook.com/profile.php?id=100000879196200"}>Адаптивный сайт
                            <img className="aboutMe__strelka" src={strelka} alt="Стрелка"/></a>
                </div>
                    <div>
                        <img className="aboutMe__lineSimple" src={line} alt="Линия"/>
                        <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkLanding"
                           href={"https://github.com/Olik-Olik"}>Одностраничное
                            приложение
                        <img className="aboutMe__strelka" src={strelka} alt="Стрелка" /> </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutMe;
