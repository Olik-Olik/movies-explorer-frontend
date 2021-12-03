import React from 'react';
import '../components/AboutMe.css';
import fotoMe from '../images/AboutMe/fotoMe.JPG';
import line from '../images/line.svg';
import Image_world from '../images/Image_world.svg';

function AboutMe(props) {
    return (
        <>
            <h2 className='whoIS'>Студент</h2>
            <img className="aboutMe__line" src={line} alt="Линия"/>
           {/* <div className='line'/>*/}
            <div className='myName'>OLIK</div>
            <div className='aboutMe__work'>Фронтенд-разработчик, 99 лет</div>
            <div className= 'descriptionFoto'>
                <div className='aboutMeTitleAbout'>Я родился и живу в Москве,
                    закончил МИФИ. Я не люблю слушать музыку,она мешает сосредоточиться. Сейчас увлекаюсь пирожными,
                    шоколадом и сгущенкой. А еще люблю море и все красивое.Недавно начал кодить и читать полезные
                    книжки, с 2021г.
                    После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами.</div>
                {/*<div className='aboutMeFoto'>
                    <img className="imgfotoMe" src={fotoMe} alt="Фотка"/>
                </div>*/}
                <div className='aboutMeFoto'>
                    <img className="imgfotoMe" src={fotoMe} alt="Фотка"/>
                </div>
                {/*<div className='aboutMeFoto'>
                    <img className="imgfotoMe" src={Image_world} alt="Фотка"/>
                </div>*/}
            </div>


                <div className='links'>
                    <div className="aboutMeLinks">
                        <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkStatic"
                           href={"https://www.facebook.com/profile.php?id=100000879196200"}>Статичный сайт</a>
                        <img className="lineSimple" src={line} alt="Линия"/>
                        <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkAdaptive"
                           href={"https://www.facebook.com/profile.php?id=100000879196200"}>Адаптивный сайт</a>
                        <img className="lineSimple" src={line} alt="Линия"/>
                        <a target="_blank" rel="noopener noreferrer" className="aboutMeLinkLanding"
                           href={"https://github.com/Olik-Olik"}>Одностраничное
                            приложение</a>
                       {/* <div className='aboutMeFoto'>
                            <img className="imgfotoMe" src={fotoMe} alt="Фотка"/>
                        </div>*/}
                </div>

            </div>
        </>

    )
}

export default AboutMe;
/*  export default function Navbar(props)
  {
  /!*extends
      React.Component
      {
          render()
          {
              const {location} = this.props;
              const AboutMeTitleStaticWeb = location.pathname === 'https://www.facebook.com/profile.php?id=100000879196200' ? "active" : "";
              const AboutMeTitleAdaptiveWeb = location.pathname === 'https://www.facebook.com/profile.php?id=100000879196200' ? "active" : "";
              const AboutMeTitleLanding = location.pathname === 'https://www.facebook.com/profile.php?id=100000879196200' ? "active" : "";
              const AboutMeTitlePortfolio = location.pathname === 'https://www.facebook.com/profile.php?id=100000879196200' ? "active" : "";
              return (*!/
                  <div>
                      <ul className="nav navbar-nav navbar-right">
                          <li className='AboutMeTitlePortfolio'><Link
                              to="https://www.facebook.com/profile.php?id=100000879196200">Портфолио</Link></li>
                          <li className='AboutMeTitleStaticWeb'><Link
                              to=" https://www.facebook.com/profile.php?id=100000879196200">Статичный сайт</Link></li>
                          <li className='AboutMeTitleAdaptiveWeb'><Link
                              to="https://www.facebook.com/profile.php?id=100000879196200">Адаптивный сайт</Link></li>
                          <li className='AboutMeTitleLanding'><Link
                              to=" https://www.facebook.com/profile.php?id=100000879196200">Одностраничное
                              приложение</Link></li>
                      </ul>
                  </div>
          }
  }
*/