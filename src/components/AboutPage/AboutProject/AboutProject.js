import React from "react";
import './AboutProject.css';
import line from "../../images/line.svg";

import '../../../index.css';
function AboutProject(props) {
    return (
        <section className="main">
        <aboutProject className="aboutProject">
            <div className="aboutProject__title">О проекте
            </div>

            <div className="aboutProject__all__stolb">
                {/*титлы в 2-ух столбцах*/}
                <div className="aboutProject__1stolb">
                    <div className="aboutProject__title1stolb">Дипломный проект включал 5 этапов</div>
                    <div className="aboutProject__title2stolb">На выполнение диплома ушло 5 недель</div>
                </div>

                <div className="aboutProject__2stolb">
                    <div className="aboutProject__process1stolb">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </div>
                    <div className="aboutProject__process2stolb">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </div>
                </div>
            </div>
            {/* Сами титлы 1 и 4 неделя*/}
                <div  className="aboutProject__button">
                    <div className="aboutProject__button_first" onClick={'{/* не тыкабельна зеленая */}'}>1
                    неделя</div>

                    <div className="aboutProject__button_second" onClick={'{/* не тыкабельна серая*/}'}>4
                    неделя</div>

                             </div>
            {/* Надписи под 1 и 4 неделями*/}
            <div  className="aboutProject__button">
            <p className="aboutProject__button_first_down" onClick={'{/* не тыкабельна зеленая */}'}>Front-end</p>
            <p className="aboutProject__button_second_down" onClick={'{/* не тыкабельна серая*/}'}>Back-end</p>
            </div>
        </aboutProject>
        </section>);
}

export default AboutProject;