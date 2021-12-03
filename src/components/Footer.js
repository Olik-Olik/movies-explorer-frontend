import React from "react";
import './Footer.css';
function Footer(props) {
    return (
            <footer className="footer">
            <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
                <div className="footer__container">
                    <a  target="_blank" rel="noopener noreferrer" className="footer__yandex" href = { "https://www.facebook.com/profile.php?id=100000879196200"}>Яндекс.Практикум</a>
                    <a target="_blank" rel="noopener noreferrer" className="footer__gitHub" href={ "https://github.com/Olik-Olik"}>GitHub</a>
                    <a target="_blank" rel="noopener noreferrer" className="footer__facebook" href={ "https://www.facebook.com/profile.php?id=100000879196200"}>Facebook</a>


                </div>
            <p className="footer__data">  ©  {new Date().getFullYear()} </p>
            </footer>);}
        export default Footer;

            {/*<div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.
            </div>

            <div className="footer__container">
            <div className="footer__links">
                <a  target="_blank" rel="noopener noreferrer" className="linkYandex" href = { "https://www.facebook.com/profile.php?id=100000879196200"}>Яндекс.Практикум</a>
                <a target="_blank" rel="noopener noreferrer" className="linkFacebook" href={ "https://www.facebook.com/profile.php?id=100000879196200"}>Facebook</a>
                <a target="_blank" rel="noopener noreferrer" className="linkGitHub" href={ "https://github.com/Olik-Olik"}>GitHub</a>

            </div>
                <p className="footer__data">  ©  {new Date().getFullYear()} </p>
            </div>

            </>*/}
{/*        </footer>);
}*/}
//rel="noopener noreferrer"
// улучшают безопасность веб-сайта, но некоторые люди хотят игнорировать их, потому что думают, что они повлияют на поисковую оптимизацию их веб-сайта, но это всего лишь миф
/*export default Footer;*/
