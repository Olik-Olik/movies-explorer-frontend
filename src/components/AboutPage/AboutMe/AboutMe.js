import React from 'react';
import '../AboutMe/AboutMe.css';
import {facebook_url, github_url} from '../../../utils/constants';
import fotoMe from '../../images/AboutMe/fotoMe.jpg';

import '../../../index.css';

function AboutMe(props) {
    return (
        <>
            <section className="aboutMe__main">
                <h2 className='aboutMe__whoIS'>Студент</h2>
                <div className='aboutMe__descriptionFoto'>

                    <div>{/*3 вместе*/}
                        <div className='aboutMe__myName'>Ольга</div>
                        <div className='aboutMe__work'>Фронтенд-разработчик</div>
                        <div className='aboutMeTitleAbout'>Я родилась и живу в Москве,
                            закончила МИФИ. Работала в IT отделе в фармацевтических компаниях,
                            PM в телекоммуникационной компании. В 2021 году заинтересовалась web-разработкой.
                            Люблю азиатскую кухню, путешествовать, заниматься верховой ездой,
                            играть в гольф, встречаться с друзьями.
                        </div>
                    </div>

                    <div className='aboutMeFoto'>
                        <img className="imgfotoMe" src={fotoMe} alt="Фотка"/>
                    </div>
                </div>

                <div className="aboutMe__connect">
                    <a target="_blank" rel="noopener noreferrer" className="aboutMe__facebook "
                       href={facebook_url}>Facebook</a>
                    <a target="_blank" rel="noopener noreferrer" className="aboutMe__gitHub"
                       href={github_url}>GitHub</a>
                </div>

                <p className="aboutMe__portfolio">Портфолио</p>

                <div className='links'>
                    <div className="aboutMeLinks">

                        <div className="aboutMe__strelka-resurs">
                            <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkStatic"
                               href={github_url}>Статичный сайт</a>
                            <p className="aboutMe__strelka">↗</p>

                        </div>
                        <div>
                            <div className="aboutMe__strelka-resurs">
                                <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkStatic"
                                   href={github_url}>Адаптивный сайт</a>
                                <p className="aboutMe__strelka">↗</p>
                            </div>

                        </div>
                        <div>
                            <div className="aboutMe__strelka-resurs">
                                <a target="_blank" rel="noopener noreferrer"
                                   className="aboutMeLinkStatic  aboutMeLinkStaticAnotherStyle"
                                   href={"https://github.com/Olik-Olik"}>Одностраничное приложение</a>
                                <p className="aboutMe__strelka">↗</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;
