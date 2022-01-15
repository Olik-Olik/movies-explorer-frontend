import React from "react";
import './AboutProject.css';

import '../../../index.css';

function AboutProject(props) {
    return (
        <section className="aboutMe__main">
            <div className="aboutProject__title">О проекте
            </div>

            <div className="aboutProject__all__stolb">
                <div className="aboutProject__1stolb">
                    <p className="aboutProject__title1stolb">Дипломный проект включал 5 этапов</p>
                    <p className="aboutProject__process1stolb">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки. </p>
                </div>
                <div className="aboutProject__2stolb">
                    <p className="aboutProject__title2stolb">На выполнение диплома ушло 5 недель</p>
                    <p className="aboutProject__process2stolb">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься. </p>
                </div>

            </div>
            <div className="aboutProject__button">
                <div className="aboutProject__button_first">1
                    неделя
                </div>

                <div className="aboutProject__button_second">4
                    неделя
                </div>

            </div>
            <div className="aboutProject__button">
                <p className="aboutProject__button_first_down">Back-end</p>
                <p className="aboutProject__button_second_down">Front-end</p>
            </div>
        </section>);
}

export default AboutProject;
