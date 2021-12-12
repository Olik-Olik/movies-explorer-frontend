import React from "react";
import './AboutProject.css';
import line from "../../images/line.svg";

import '../../../index.css';
function AboutProject(props) {
    return (
        <section className="main">
        {/*<aboutProject className="aboutProject">*/}
            <div className="aboutProject__title">О проекте
            </div>

            <div className="aboutProject__all__stolb">
                {/*титлы в 2-ух столбцах*/}
                <div className="aboutProject__1stolb">
                    <p className="aboutProject__title1stolb">Дипломный проект включал 5 этапов</p>
                    {/*  <div className="aboutProject__title2stolb">На выполнение диплома ушло 5 недель</div>*/}
                    <p className="aboutProject__process1stolb">Составление плана, работу над бэкендом, вёрстку,
                    добавление функциональности и финальные доработки.  </p>
                </div>


                <div className="aboutProject__2stolb">
                   {/* <div className="aboutProject__process1stolb">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </div>*/}
                    <p className="aboutProject__title2stolb">На выполнение диплома ушло 5 недель</p>
                    <p className="aboutProject__process2stolb">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься. </p>
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
            <p className="aboutProject__button_first_down" onClick={'{/* не тыкабельна зеленая */}'}>Back-end</p>
            <p className="aboutProject__button_second_down" onClick={'{/* не тыкабельна серая*/}'}>Front-end</p>
            </div>
     {/*   </aboutProject>*/}
        </section>);
}

export default AboutProject;